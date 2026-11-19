var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let AdaptiveService = class AdaptiveService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAdaptiveDifficulty(input) {
        const mastery = await this.prisma.skillMastery.findUnique({
            where: {
                userId_skillId: {
                    userId: input.userId,
                    skillId: input.skillId,
                },
            },
        });
        const overallMastery = mastery?.masteryScore ?? 0;
        const recentAttempts = await this.prisma.questionAttempt.findMany({
            where: {
                userId: input.userId,
                question: {
                    skillId: input.skillId,
                },
            },
            select: {
                isCorrect: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
            take: 5,
        });
        const recentCorrectAttempts = recentAttempts.filter((attempt) => attempt.isCorrect).length;
        const recentPerformance = recentAttempts.length > 0
            ? (recentCorrectAttempts /
                recentAttempts.length) *
                100
            : overallMastery;
        const adaptiveScore = overallMastery * 0.4 +
            recentPerformance * 0.6;
        const targetDifficulty = this.getDifficultyFromScore(adaptiveScore);
        return {
            skillId: input.skillId,
            overallMastery: this.roundScore(overallMastery),
            recentPerformance: this.roundScore(recentPerformance),
            recentAttempts: recentAttempts.length,
            adaptiveScore: this.roundScore(adaptiveScore),
            targetDifficulty,
        };
    }
    getDifficultyFromScore(score) {
        if (score >= 80) {
            return 'HARD';
        }
        if (score >= 50) {
            return 'MEDIUM';
        }
        return 'EASY';
    }
    roundScore(score) {
        return (Math.round(score * 100) / 100);
    }
};
AdaptiveService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AdaptiveService);
export { AdaptiveService };
//# sourceMappingURL=adaptive.service.js.map