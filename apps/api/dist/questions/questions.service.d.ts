import { AdaptiveDifficulty, AdaptiveService } from '../adaptive/adaptive.service.js';
import { PrismaService } from '../prisma/prisma.service.js';
type SupportedLocale = 'en' | 'id' | 'zh';
export declare class QuestionsService {
    private readonly prisma;
    private readonly adaptiveService;
    constructor(prisma: PrismaService, adaptiveService: AdaptiveService);
    getLessonQuestions(lessonId: string, userId: string, lang?: string): Promise<{
        lesson: {
            id: string;
            title: string;
            description: string | null;
            xpReward: number;
            skillId: string;
        };
        locale: SupportedLocale;
        adaptive: {
            skillId: string;
            overallMastery: number;
            recentPerformance: number;
            recentAttempts: number;
            adaptiveScore: number;
            targetDifficulty: AdaptiveDifficulty;
        };
        selectedDifficulty: AdaptiveDifficulty;
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
        locale: SupportedLocale;
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
            targetDifficulty: AdaptiveDifficulty;
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
        locale: SupportedLocale;
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
            targetDifficulty: AdaptiveDifficulty;
        };
        selectedDifficulty: AdaptiveDifficulty;
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
    private getPublishedLesson;
    private validateActiveUser;
    private getPublishedQuestions;
    private selectQuestionsByDifficulty;
    private getDifficultyFallbackOrder;
    private pickRandomQuestion;
    private buildPlayableQuestion;
    private buildQuestionFromDelivery;
    private buildParameterizedQuestion;
}
export {};
