import { PrismaService } from '../prisma/prisma.service.js';
import { StartLessonSessionDto } from './dto/start-lesson-session.dto.js';
type RecordAttemptInput = {
    sessionId: string;
    userId: string;
    lessonId: string;
    isCorrect: boolean;
};
export declare class LessonSessionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    startSession(dto: StartLessonSessionDto): Promise<{
        message: string;
        session: {
            id: string;
            userId: string;
            lessonId: string;
            targetQuestions: number;
            answeredQuestions: number;
            correctAnswers: number;
            remainingQuestions: number;
            earnedXp: number;
            status: "IN_PROGRESS" | "COMPLETED" | "ABANDONED";
            startedAt: Date;
            completedAt: Date | null;
        };
        lesson: {
            id: string;
            title: string;
            description: string | null;
            xpReward: number;
            bgImageKey: string;
        };
    }>;
    validateSessionForAttempt(input: {
        sessionId: string;
        userId: string;
        lessonId: string;
    }): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").LessonSessionStatus;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        lessonId: string;
        targetQuestions: number;
        answeredQuestions: number;
        correctAnswers: number;
        earnedXp: number;
        startedAt: Date;
        completedAt: Date | null;
    }>;
    recordAttempt(input: RecordAttemptInput): Promise<{
        justCompleted: boolean;
        accuracy: number;
        totalXp: number;
        id: string;
        userId: string;
        lessonId: string;
        targetQuestions: number;
        answeredQuestions: number;
        correctAnswers: number;
        remainingQuestions: number;
        earnedXp: number;
        status: "IN_PROGRESS" | "COMPLETED" | "ABANDONED";
        startedAt: Date;
        completedAt: Date | null;
    } | {
        justCompleted: boolean;
        accuracy: number;
        xpAwarded: number;
        totalXp: number;
        id: string;
        userId: string;
        lessonId: string;
        targetQuestions: number;
        answeredQuestions: number;
        correctAnswers: number;
        remainingQuestions: number;
        earnedXp: number;
        status: "IN_PROGRESS" | "COMPLETED" | "ABANDONED";
        startedAt: Date;
        completedAt: Date | null;
    }>;
    private calculateAccuracy;
    private buildSessionResponse;
}
export {};
