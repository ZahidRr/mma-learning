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
let MasteryService = class MasteryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async updateSkillMastery(input) {
        const existingMastery = await this.prisma.skillMastery.findUnique({
            where: {
                userId_skillId: {
                    userId: input.userId,
                    skillId: input.skillId,
                },
            },
        });
        const previousTotalAttempts = existingMastery?.totalAttempts ?? 0;
        const previousCorrectAttempts = existingMastery?.correctAttempts ?? 0;
        const totalAttempts = previousTotalAttempts + 1;
        const correctAttempts = previousCorrectAttempts +
            (input.isCorrect ? 1 : 0);
        const masteryScore = (correctAttempts / totalAttempts) * 100;
        const mastery = await this.prisma.skillMastery.upsert({
            where: {
                userId_skillId: {
                    userId: input.userId,
                    skillId: input.skillId,
                },
            },
            update: {
                totalAttempts,
                correctAttempts,
                masteryScore,
            },
            create: {
                userId: input.userId,
                skillId: input.skillId,
                totalAttempts,
                correctAttempts,
                masteryScore,
            },
        });
        return {
            skillId: mastery.skillId,
            masteryScore: Math.round(mastery.masteryScore * 100) /
                100,
            totalAttempts: mastery.totalAttempts,
            correctAttempts: mastery.correctAttempts,
        };
    }
    async getSkillMastery(userId, skillId) {
        return this.prisma.skillMastery.findUnique({
            where: {
                userId_skillId: {
                    userId,
                    skillId,
                },
            },
        });
    }
    async getUserMasteries(userId) {
        return this.prisma.skillMastery.findMany({
            where: {
                userId,
            },
            include: {
                skill: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        topic: {
                            select: {
                                id: true,
                                name: true,
                                subject: {
                                    select: {
                                        id: true,
                                        name: true,
                                        slug: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
            orderBy: {
                updatedAt: 'desc',
            },
        });
    }
};
MasteryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], MasteryService);
export { MasteryService };
//# sourceMappingURL=mastery.service.js.map