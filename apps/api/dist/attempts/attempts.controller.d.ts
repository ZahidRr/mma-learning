import { AttemptsService } from './attempts.service.js';
import { SubmitAnswerDto } from './dto/submit-answer.dto.js';
export declare class AttemptsController {
    private readonly attemptsService;
    constructor(attemptsService: AttemptsService);
    submitAnswer(dto: SubmitAnswerDto): Promise<{
        attemptId: string;
        deliveryId: string;
        correct: boolean;
        explanation: string | null;
        message: string;
        mastery: {
            skillId: string;
            masteryScore: number;
            totalAttempts: number;
            correctAttempts: number;
        };
        adaptive: {
            skillId: string;
            overallMastery: number;
            recentPerformance: number;
            recentAttempts: number;
            adaptiveScore: number;
            targetDifficulty: import("../adaptive/adaptive.service.js").AdaptiveDifficulty;
        };
        session: {
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
        };
        lessonCompleted: boolean;
    }>;
}
