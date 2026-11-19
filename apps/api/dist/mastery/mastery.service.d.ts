import { PrismaService } from '../prisma/prisma.service.js';
type UpdateMasteryInput = {
    userId: string;
    skillId: string;
    isCorrect: boolean;
};
export declare class MasteryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    updateSkillMastery(input: UpdateMasteryInput): Promise<{
        skillId: string;
        masteryScore: number;
        totalAttempts: number;
        correctAttempts: number;
    }>;
    getSkillMastery(userId: string, skillId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        skillId: string;
        masteryScore: number;
        totalAttempts: number;
        correctAttempts: number;
    } | null>;
    getUserMasteries(userId: string): Promise<({
        skill: {
            id: string;
            name: string;
            slug: string;
            topic: {
                id: string;
                name: string;
                subject: {
                    id: string;
                    name: string;
                    slug: string;
                };
            };
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        skillId: string;
        masteryScore: number;
        totalAttempts: number;
        correctAttempts: number;
    })[]>;
}
export {};
