var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, } from '@nestjs/common';
import { AdaptiveService, } from '../adaptive/adaptive.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { generateAdditionWithinLimit } from './generators/addition-within-limit.generator.js';
let QuestionsService = class QuestionsService {
    prisma;
    adaptiveService;
    constructor(prisma, adaptiveService) {
        this.prisma = prisma;
        this.adaptiveService = adaptiveService;
    }
    async getLessonQuestions(lessonId, userId) {
        if (!userId) {
            throw new BadRequestException('userId query parameter is required');
        }
        const lesson = await this.getPublishedLesson(lessonId);
        await this.validateActiveUser(userId);
        const adaptive = await this.adaptiveService.getAdaptiveDifficulty({
            userId,
            skillId: lesson.skillId,
        });
        const questions = await this.getPublishedQuestions(lessonId);
        const { selectedDifficulty, selectedQuestions } = this.selectQuestionsByDifficulty(questions, adaptive.targetDifficulty);
        const playableQuestions = [];
        for (const question of selectedQuestions) {
            const playableQuestion = await this.buildPlayableQuestion(question);
            playableQuestions.push(playableQuestion);
        }
        return {
            lesson: {
                id: lesson.id,
                title: lesson.title,
                description: lesson.description,
                xpReward: lesson.xpReward,
                skillId: lesson.skillId,
            },
            adaptive,
            selectedDifficulty,
            questions: playableQuestions,
        };
    }
    async getNextQuestion(lessonId, sessionId) {
        if (!sessionId) {
            throw new BadRequestException('sessionId query parameter is required');
        }
        const lesson = await this.getPublishedLesson(lessonId);
        const session = await this.prisma.lessonSession.findUnique({
            where: { id: sessionId },
            select: {
                id: true,
                userId: true,
                lessonId: true,
                targetQuestions: true,
                answeredQuestions: true,
                correctAnswers: true,
                earnedXp: true,
                status: true,
                startedAt: true,
                completedAt: true,
            },
        });
        if (!session) {
            throw new NotFoundException('Lesson session not found');
        }
        if (session.lessonId !== lesson.id) {
            throw new BadRequestException('Lesson session does not belong to this lesson');
        }
        if (session.status !== 'IN_PROGRESS') {
            throw new BadRequestException('Lesson session is not in progress');
        }
        if (session.answeredQuestions >= session.targetQuestions) {
            throw new BadRequestException('Lesson session has reached its question limit');
        }
        await this.validateActiveUser(session.userId);
        const existingDelivery = await this.prisma.questionDelivery.findFirst({
            where: {
                lessonSessionId: session.id,
                status: 'PRESENTED',
            },
            include: {
                question: {
                    include: {
                        options: { orderBy: { orderIndex: 'asc' } },
                        template: true,
                    },
                },
                generatedQuestion: true,
            },
            orderBy: { presentedAt: 'desc' },
        });
        if (existingDelivery) {
            const playableQuestion = this.buildQuestionFromDelivery(existingDelivery);
            const adaptive = await this.adaptiveService.getAdaptiveDifficulty({
                userId: session.userId,
                skillId: lesson.skillId,
            });
            return {
                lesson: {
                    id: lesson.id,
                    title: lesson.title,
                    skillId: lesson.skillId,
                    xpReward: lesson.xpReward,
                },
                session: {
                    id: session.id,
                    targetQuestions: session.targetQuestions,
                    answeredQuestions: session.answeredQuestions,
                    correctAnswers: session.correctAnswers,
                    remainingQuestions: Math.max(session.targetQuestions - session.answeredQuestions, 0),
                    earnedXp: session.earnedXp,
                    status: session.status,
                },
                adaptive,
                selectedDifficulty: existingDelivery.question.difficulty,
                deliveryId: existingDelivery.id,
                question: playableQuestion,
            };
        }
        const adaptive = await this.adaptiveService.getAdaptiveDifficulty({
            userId: session.userId,
            skillId: lesson.skillId,
        });
        const questions = await this.getPublishedQuestions(lessonId);
        const { selectedDifficulty, selectedQuestions } = this.selectQuestionsByDifficulty(questions, adaptive.targetDifficulty);
        const selectedQuestion = this.pickRandomQuestion(selectedQuestions);
        const playableQuestion = await this.buildPlayableQuestion(selectedQuestion);
        const delivery = await this.prisma.questionDelivery.create({
            data: {
                lessonSessionId: session.id,
                questionId: selectedQuestion.id,
                generatedQuestionId: playableQuestion.generatedQuestionId ?? null,
                status: 'PRESENTED',
            },
        });
        return {
            lesson: {
                id: lesson.id,
                title: lesson.title,
                skillId: lesson.skillId,
                xpReward: lesson.xpReward,
            },
            session: {
                id: session.id,
                targetQuestions: session.targetQuestions,
                answeredQuestions: session.answeredQuestions,
                correctAnswers: session.correctAnswers,
                remainingQuestions: Math.max(session.targetQuestions - session.answeredQuestions, 0),
                earnedXp: session.earnedXp,
                status: session.status,
            },
            adaptive,
            selectedDifficulty,
            deliveryId: delivery.id,
            question: playableQuestion,
        };
    }
    async getPublishedLesson(lessonId) {
        const lesson = await this.prisma.lesson.findFirst({
            where: { id: lessonId, status: 'PUBLISHED' },
            select: {
                id: true,
                title: true,
                description: true,
                xpReward: true,
                skillId: true,
            },
        });
        if (!lesson) {
            throw new NotFoundException('Lesson not found');
        }
        return lesson;
    }
    async validateActiveUser(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { id: true, status: true },
        });
        if (!user || user.status !== 'ACTIVE') {
            throw new NotFoundException('Active user not found');
        }
        return user;
    }
    async getPublishedQuestions(lessonId) {
        const questions = await this.prisma.question.findMany({
            where: { lessonId, status: 'PUBLISHED' },
            include: {
                options: { orderBy: { orderIndex: 'asc' } },
                template: true,
            },
            orderBy: { orderIndex: 'asc' },
        });
        if (questions.length === 0) {
            throw new NotFoundException('No published questions found for this lesson');
        }
        return questions;
    }
    selectQuestionsByDifficulty(questions, targetDifficulty) {
        const difficultyOrder = this.getDifficultyFallbackOrder(targetDifficulty);
        for (const difficulty of difficultyOrder) {
            const matchingQuestions = questions.filter((question) => question.difficulty === difficulty);
            if (matchingQuestions.length > 0) {
                return {
                    selectedDifficulty: difficulty,
                    selectedQuestions: matchingQuestions,
                };
            }
        }
        throw new NotFoundException('No suitable questions found for this lesson');
    }
    getDifficultyFallbackOrder(targetDifficulty) {
        if (targetDifficulty === 'HARD')
            return ['HARD', 'MEDIUM', 'EASY'];
        if (targetDifficulty === 'MEDIUM')
            return ['MEDIUM', 'EASY', 'HARD'];
        return ['EASY', 'MEDIUM', 'HARD'];
    }
    pickRandomQuestion(questions) {
        if (questions.length === 0) {
            throw new NotFoundException('No questions available');
        }
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    }
    async buildPlayableQuestion(question) {
        if (question.source === 'PARAMETERIZED') {
            return this.buildParameterizedQuestion(question);
        }
        return {
            id: question.id,
            generatedQuestionId: null,
            skillId: question.skillId,
            type: question.type,
            source: question.source,
            format: question.format,
            difficulty: question.difficulty,
            prompt: question.prompt,
            options: question.type === 'MULTIPLE_CHOICE'
                ? question.options.map((option) => ({
                    id: option.id,
                    text: option.text,
                    orderIndex: option.orderIndex,
                }))
                : [],
        };
    }
    buildQuestionFromDelivery(delivery) {
        const question = delivery.question;
        if (question.source === 'PARAMETERIZED' && delivery.generatedQuestion) {
            const correctVal = parseInt(delivery.generatedQuestion.correctAnswer, 10);
            const distractors = new Set();
            while (distractors.size < 3) {
                const diff = Math.floor(Math.random() * 7) - 3;
                const fakeVal = correctVal + diff;
                if (fakeVal >= 0 && fakeVal !== correctVal) {
                    distractors.add(fakeVal);
                }
            }
            const allOptionsValues = [correctVal, ...Array.from(distractors)];
            const shuffledValues = allOptionsValues.sort(() => Math.random() - 0.5);
            const options = shuffledValues.map((val, index) => ({
                id: `opt_${index}`,
                text: val.toString(),
                orderIndex: index,
            }));
            const correctOptionId = options.find((o) => o.text === delivery.generatedQuestion.correctAnswer)?.id;
            return {
                id: question.id,
                generatedQuestionId: delivery.generatedQuestion.id,
                skillId: question.skillId,
                type: 'MULTIPLE_CHOICE',
                source: question.source,
                format: question.format,
                difficulty: question.difficulty,
                prompt: delivery.generatedQuestion.prompt,
                options: options,
                correctOptionId: correctOptionId,
            };
        }
        return {
            id: question.id,
            generatedQuestionId: null,
            skillId: question.skillId,
            type: question.type,
            source: question.source,
            format: question.format,
            difficulty: question.difficulty,
            prompt: question.prompt,
            options: question.type === 'MULTIPLE_CHOICE'
                ? question.options.map((option) => ({
                    id: option.id,
                    text: option.text,
                    orderIndex: option.orderIndex,
                }))
                : [],
        };
    }
    async buildParameterizedQuestion(question) {
        if (!question.template) {
            throw new InternalServerErrorException('Parameterized question does not have a template');
        }
        const template = question.template;
        if (template.generatorKey === 'ADDITION_WITHIN_LIMIT') {
            const generated = generateAdditionWithinLimit(template.template, template.config);
            const generatedQuestion = await this.prisma.generatedQuestion.create({
                data: {
                    questionId: question.id,
                    prompt: generated.prompt,
                    correctAnswer: generated.correctAnswer,
                    variables: generated.variables,
                },
            });
            const correctVal = parseInt(generated.correctAnswer, 10);
            const distractors = new Set();
            while (distractors.size < 3) {
                const diff = Math.floor(Math.random() * 7) - 3;
                const fakeVal = correctVal + diff;
                if (fakeVal >= 0 && fakeVal !== correctVal) {
                    distractors.add(fakeVal);
                }
            }
            const allOptionsValues = [correctVal, ...Array.from(distractors)];
            const shuffledValues = allOptionsValues.sort(() => Math.random() - 0.5);
            const options = shuffledValues.map((val, index) => ({
                id: `opt_${index}`,
                text: val.toString(),
                orderIndex: index,
            }));
            const correctOptionId = options.find((o) => o.text === generated.correctAnswer)?.id;
            return {
                id: question.id,
                generatedQuestionId: generatedQuestion.id,
                skillId: question.skillId,
                type: 'MULTIPLE_CHOICE',
                source: question.source,
                format: question.format,
                difficulty: question.difficulty,
                prompt: generated.prompt,
                options: options,
                correctOptionId: correctOptionId,
            };
        }
        throw new InternalServerErrorException(`Unsupported question generator: ${template.generatorKey}`);
    }
};
QuestionsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        AdaptiveService])
], QuestionsService);
export { QuestionsService };
//# sourceMappingURL=questions.service.js.map