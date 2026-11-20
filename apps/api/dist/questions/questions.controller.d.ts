import { QuestionsService } from './questions.service.js';
export declare class QuestionsController {
    private readonly questionsService;
    constructor(questionsService: QuestionsService);
    getLessonQuestions(lessonId: string, userId: string, lang?: string): Promise<{
        lesson: {
            id: string;
            title: string;
            description: string | null;
            xpReward: number;
            skillId: string;
        };
        locale: "id" | "en" | "zh";
        adaptive: {
            skillId: string;
            overallMastery: number;
            recentPerformance: number;
            recentAttempts: number;
            adaptiveScore: number;
            targetDifficulty: import("../adaptive/adaptive.service.js").AdaptiveDifficulty;
        };
        selectedDifficulty: import("../adaptive/adaptive.service.js").AdaptiveDifficulty;
        questions: ({
            id: any;
            generatedQuestionId: string;
            skillId: any;
            type: string;
            source: any;
            format: any;
            difficulty: any;
            prompt: string;
            options: {
                id: string;
                text: string;
                orderIndex: number;
            }[];
            correctOptionId: string | undefined;
        } | {
            id: any;
            generatedQuestionId: null;
            skillId: any;
            type: any;
            source: any;
            format: any;
            difficulty: any;
            prompt: string;
            options: any;
        })[];
    }>;
    getNextQuestion(lessonId: string, sessionId: string, lang?: string): Promise<{
        lesson: {
            id: string;
            title: string;
            skillId: string;
            xpReward: number;
        };
        locale: "id" | "en" | "zh";
        session: {
            id: string;
            targetQuestions: number;
            answeredQuestions: number;
            correctAnswers: number;
            remainingQuestions: number;
            earnedXp: number;
            status: "IN_PROGRESS";
        };
        adaptive: {
            skillId: string;
            overallMastery: number;
            recentPerformance: number;
            recentAttempts: number;
            adaptiveScore: number;
            targetDifficulty: import("../adaptive/adaptive.service.js").AdaptiveDifficulty;
        };
        selectedDifficulty: import("../generated/prisma/enums.js").DifficultyLevel;
        deliveryId: string;
        question: {
            id: any;
            generatedQuestionId: any;
            skillId: any;
            type: string;
            source: any;
            format: any;
            difficulty: any;
            prompt: any;
            options: {
                id: string;
                text: string;
                orderIndex: number;
            }[];
            correctOptionId: string | undefined;
        } | {
            id: any;
            generatedQuestionId: null;
            skillId: any;
            type: any;
            source: any;
            format: any;
            difficulty: any;
            prompt: string;
            options: any;
            correctOptionId?: undefined;
        };
    } | {
        lesson: {
            id: string;
            title: string;
            skillId: string;
            xpReward: number;
        };
        locale: "id" | "en" | "zh";
        session: {
            id: string;
            targetQuestions: number;
            answeredQuestions: number;
            correctAnswers: number;
            remainingQuestions: number;
            earnedXp: number;
            status: "IN_PROGRESS";
        };
        adaptive: {
            skillId: string;
            overallMastery: number;
            recentPerformance: number;
            recentAttempts: number;
            adaptiveScore: number;
            targetDifficulty: import("../adaptive/adaptive.service.js").AdaptiveDifficulty;
        };
        selectedDifficulty: import("../adaptive/adaptive.service.js").AdaptiveDifficulty;
        deliveryId: string;
        question: {
            id: any;
            generatedQuestionId: string;
            skillId: any;
            type: string;
            source: any;
            format: any;
            difficulty: any;
            prompt: string;
            options: {
                id: string;
                text: string;
                orderIndex: number;
            }[];
            correctOptionId: string | undefined;
        } | {
            id: any;
            generatedQuestionId: null;
            skillId: any;
            type: any;
            source: any;
            format: any;
            difficulty: any;
            prompt: string;
            options: any;
        };
    }>;
}
