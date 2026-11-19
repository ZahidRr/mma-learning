var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, Injectable, NotFoundException, } from '@nestjs/common';
import { AdaptiveService } from '../adaptive/adaptive.service.js';
import { LessonSessionsService } from '../lesson-sessions/lesson-sessions.service.js';
import { MasteryService } from '../mastery/mastery.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
let AttemptsService = class AttemptsService {
    prisma;
    masteryService;
    adaptiveService;
    lessonSessionsService;
    constructor(prisma, masteryService, adaptiveService, lessonSessionsService) {
        this.prisma = prisma;
        this.masteryService = masteryService;
        this.adaptiveService = adaptiveService;
        this.lessonSessionsService = lessonSessionsService;
    }
    async submitAnswer(dto) {
        const delivery = await this.prisma.questionDelivery.findUnique({
            where: {
                id: dto.deliveryId,
            },
            include: {
                lessonSession: true,
                generatedQuestion: true,
                attempt: {
                    select: {
                        id: true,
                    },
                },
                question: {
                    include: {
                        options: true,
                    },
                },
            },
        });
        if (!delivery) {
            throw new NotFoundException('Question delivery not found');
        }
        if (delivery.status !== 'PRESENTED' ||
            delivery.attempt) {
            throw new ConflictException('This question has already been answered');
        }
        const session = delivery.lessonSession;
        const question = delivery.question;
        const user = await this.prisma.user.findUnique({
            where: {
                id: session.userId,
            },
            select: {
                id: true,
                status: true,
            },
        });
        if (!user ||
            user.status !== 'ACTIVE') {
            throw new NotFoundException('Active user not found');
        }
        await this.lessonSessionsService.validateSessionForAttempt({
            sessionId: session.id,
            userId: session.userId,
            lessonId: question.lessonId,
        });
        let correct = false;
        let explanation = question.explanation;
        if (question.source === 'PARAMETERIZED') {
            const generatedQuestion = delivery.generatedQuestion;
            if (!generatedQuestion) {
                throw new BadRequestException('Generated question is missing from this delivery');
            }
            correct =
                dto.answer.trim() ===
                    generatedQuestion.correctAnswer.trim();
            explanation =
                `${generatedQuestion.prompt} = ${generatedQuestion.correctAnswer}`;
        }
        else if (question.type === 'MULTIPLE_CHOICE') {
            const selectedOption = question.options.find((option) => option.id === dto.answer);
            if (!selectedOption) {
                throw new BadRequestException('Invalid answer option');
            }
            correct =
                selectedOption.isCorrect;
        }
        else if (question.type === 'SHORT_ANSWER') {
            const config = question.answerConfig;
            if (!config?.acceptedAnswers ||
                config.acceptedAnswers.length === 0) {
                throw new BadRequestException('This question does not have valid answer configuration');
            }
            const caseSensitive = config.caseSensitive ?? false;
            const submittedAnswer = dto.answer.trim();
            correct =
                config.acceptedAnswers.some((acceptedAnswer) => {
                    const expectedAnswer = acceptedAnswer.trim();
                    if (caseSensitive) {
                        return (expectedAnswer ===
                            submittedAnswer);
                    }
                    return (expectedAnswer.toLowerCase() ===
                        submittedAnswer.toLowerCase());
                });
        }
        let attempt;
        try {
            attempt =
                await this.prisma.questionAttempt.create({
                    data: {
                        userId: session.userId,
                        questionId: question.id,
                        lessonSessionId: session.id,
                        generatedQuestionId: delivery.generatedQuestionId,
                        deliveryId: delivery.id,
                        answer: dto.answer,
                        isCorrect: correct,
                        timeSpent: dto.timeSpent ?? null,
                    },
                });
        }
        catch (error) {
            const existingAttempt = await this.prisma.questionAttempt.findUnique({
                where: {
                    deliveryId: delivery.id,
                },
            });
            if (existingAttempt) {
                throw new ConflictException('This question has already been answered');
            }
            throw error;
        }
        await this.prisma.questionDelivery.update({
            where: {
                id: delivery.id,
            },
            data: {
                status: 'ANSWERED',
                answeredAt: new Date(),
            },
        });
        const mastery = await this.masteryService.updateSkillMastery({
            userId: session.userId,
            skillId: question.skillId,
            isCorrect: correct,
        });
        const updatedSession = await this.lessonSessionsService.recordAttempt({
            sessionId: session.id,
            userId: session.userId,
            lessonId: question.lessonId,
            isCorrect: correct,
        });
        const adaptive = await this.adaptiveService.getAdaptiveDifficulty({
            userId: session.userId,
            skillId: question.skillId,
        });
        return {
            attemptId: attempt.id,
            deliveryId: delivery.id,
            correct,
            explanation,
            message: correct
                ? 'Correct answer!'
                : 'Incorrect answer.',
            mastery,
            adaptive,
            session: updatedSession,
            lessonCompleted: updatedSession.justCompleted,
        };
    }
};
AttemptsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        MasteryService,
        AdaptiveService,
        LessonSessionsService])
], AttemptsService);
export { AttemptsService };
//# sourceMappingURL=attempts.service.js.map