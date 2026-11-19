import { PrismaService } from '../prisma/prisma.service.js';
export type AdaptiveDifficulty = 'EASY' | 'MEDIUM' | 'HARD';
type GetAdaptiveDifficultyInput = {
    userId: string;
    skillId: string;
};
export declare class AdaptiveService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAdaptiveDifficulty(input: GetAdaptiveDifficultyInput): Promise<{
        skillId: string;
        overallMastery: number;
        recentPerformance: number;
        recentAttempts: number;
        adaptiveScore: number;
        targetDifficulty: AdaptiveDifficulty;
    }>;
    private getDifficultyFromScore;
    private roundScore;
}
export {};
