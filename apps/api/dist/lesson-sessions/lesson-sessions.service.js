var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let LessonSessionsService = class LessonSessionsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async startSession(dto) {
        const user = await this.prisma.user.findUnique({
            where: { id: dto.userId },
            select: { id: true, status: true },
        });
        if (!user || user.status !== 'ACTIVE') {
            throw new NotFoundException('Active user not found');
        }
        const lesson = await this.prisma.lesson.findFirst({
            where: {
                id: dto.lessonId,
                status: 'PUBLISHED',
            },
            select: {
                id: true,
                title: true,
                description: true,
                xpReward: true,
                skillId: true,
                skill: {
                    select: {
                        topic: {
                            select: {
                                name: true,
                                slug: true,
                            },
                        },
                    },
                },
            },
        });
        if (!lesson) {
            throw new NotFoundException('Published lesson not found');
        }
        const frontendLessonData = {
            id: lesson.id,
            title: lesson.skill?.topic?.name || lesson.title,
            description: lesson.description,
            xpReward: lesson.xpReward,
            bgImageKey: lesson.skill?.topic?.slug
                ? `${lesson.skill.topic.slug.replace(/-/g, '')}bg.png`
                : 'countingmeadowbg.png',
        };
        const existingSession = await this.prisma.lessonSession.findFirst({
            where: {
                userId: dto.userId,
                lessonId: dto.lessonId,
                status: 'IN_PROGRESS',
            },
            orderBy: { startedAt: 'desc' },
        });
        if (existingSession) {
            return {
                message: 'Existing lesson session resumed.',
                session: this.buildSessionResponse(existingSession),
                lesson: frontendLessonData,
            };
        }
        const session = await this.prisma.lessonSession.create({
            data: {
                userId: dto.userId,
                lessonId: dto.lessonId,
                targetQuestions: 10,
                answeredQuestions: 0,
                correctAnswers: 0,
                earnedXp: 0,
                status: 'IN_PROGRESS',
            },
        });
        return {
            message: 'Lesson session started.',
            session: this.buildSessionResponse(session),
            lesson: frontendLessonData,
        };
    }
    async validateSessionForAttempt(input) {
        const session = await this.prisma.lessonSession.findUnique({
            where: { id: input.sessionId },
        });
        if (!session) {
            throw new NotFoundException('Lesson session not found');
        }
        if (session.userId !== input.userId) {
            throw new BadRequestException('Lesson session does not belong to this user');
        }
        if (session.lessonId !== input.lessonId) {
            throw new BadRequestException('Question does not belong to this lesson session');
        }
        if (session.status !== 'IN_PROGRESS') {
            throw new BadRequestException('Lesson session is not in progress');
        }
        if (session.answeredQuestions >= session.targetQuestions) {
            throw new BadRequestException('Lesson session has reached its question limit');
        }
        return session;
    }
    async recordAttempt(input) {
        const session = await this.validateSessionForAttempt({
            sessionId: input.sessionId,
            userId: input.userId,
            lessonId: input.lessonId,
        });
        const lesson = await this.prisma.lesson.findUnique({
            where: { id: input.lessonId },
            select: { id: true, xpReward: true },
        });
        if (!lesson) {
            throw new NotFoundException('Lesson not found');
        }
        const answeredQuestions = session.answeredQuestions + 1;
        const correctAnswers = session.correctAnswers + (input.isCorrect ? 1 : 0);
        const isCompleted = answeredQuestions >= session.targetQuestions;
        if (!isCompleted) {
            const updatedSession = await this.prisma.lessonSession.update({
                where: { id: session.id },
                data: { answeredQuestions, correctAnswers },
            });
            const learnerProfile = await this.prisma.learnerProfile.findUnique({
                where: { userId: input.userId },
                select: { totalXp: true },
            });
            return {
                ...this.buildSessionResponse(updatedSession),
                justCompleted: false,
                accuracy: this.calculateAccuracy(correctAnswers, answeredQuestions),
                totalXp: learnerProfile?.totalXp ?? 0,
            };
        }
        const completedAt = new Date();
        const [updatedSession, updatedLearnerProfile] = await this.prisma.$transaction([
            this.prisma.lessonSession.update({
                where: { id: session.id },
                data: {
                    answeredQuestions,
                    correctAnswers,
                    status: 'COMPLETED',
                    earnedXp: lesson.xpReward,
                    completedAt,
                },
            }),
            this.prisma.learnerProfile.update({
                where: { userId: input.userId },
                data: {
                    totalXp: { increment: lesson.xpReward },
                },
                select: { id: true, userId: true, totalXp: true },
            }),
        ]);
        return {
            ...this.buildSessionResponse(updatedSession),
            justCompleted: true,
            accuracy: this.calculateAccuracy(correctAnswers, answeredQuestions),
            xpAwarded: lesson.xpReward,
            totalXp: updatedLearnerProfile.totalXp,
        };
    }
    calculateAccuracy(correctAnswers, answeredQuestions) {
        if (answeredQuestions === 0)
            return 0;
        return Math.round((correctAnswers / answeredQuestions) * 10000) / 100;
    }
    buildSessionResponse(session) {
        return {
            id: session.id,
            userId: session.userId,
            lessonId: session.lessonId,
            targetQuestions: session.targetQuestions,
            answeredQuestions: session.answeredQuestions,
            correctAnswers: session.correctAnswers,
            remainingQuestions: Math.max(session.targetQuestions - session.answeredQuestions, 0),
            earnedXp: session.earnedXp,
            status: session.status,
            startedAt: session.startedAt,
            completedAt: session.completedAt,
        };
    }
};
LessonSessionsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], LessonSessionsService);
export { LessonSessionsService };
//# sourceMappingURL=lesson-sessions.service.js.map