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
let CurriculumService = class CurriculumService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCurriculum() {
        return this.prisma.curriculum.findFirst({
            where: {
                status: 'PUBLISHED',
            },
            select: {
                id: true,
                name: true,
                code: true,
                description: true,
            },
        });
    }
    async getSubjects() {
        return this.prisma.subject.findMany({
            where: {
                status: 'PUBLISHED',
                curriculum: {
                    status: 'PUBLISHED',
                },
            },
            select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                iconKey: true,
                orderIndex: true,
            },
            orderBy: {
                orderIndex: 'asc',
            },
        });
    }
    async getTopics(subjectId, gradeLevel) {
        return this.prisma.topic.findMany({
            where: {
                subjectId,
                status: 'PUBLISHED',
                ...(gradeLevel !== undefined ? { gradeLevel } : {}),
                subject: {
                    status: 'PUBLISHED',
                },
            },
            select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                gradeLevel: true,
                orderIndex: true,
            },
            orderBy: {
                orderIndex: 'asc',
            },
        });
    }
    async getSkills(topicId) {
        return this.prisma.skill.findMany({
            where: {
                topicId,
                status: 'PUBLISHED',
                topic: {
                    status: 'PUBLISHED',
                },
            },
            select: {
                id: true,
                name: true,
                slug: true,
                description: true,
                orderIndex: true,
            },
            orderBy: {
                orderIndex: 'asc',
            },
        });
    }
    async getLessons(skillId) {
        return this.prisma.lesson.findMany({
            where: {
                skillId,
                status: 'PUBLISHED',
                skill: {
                    status: 'PUBLISHED',
                },
            },
            select: {
                id: true,
                title: true,
                slug: true,
                description: true,
                orderIndex: true,
                xpReward: true,
            },
            orderBy: {
                orderIndex: 'asc',
            },
        });
    }
};
CurriculumService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], CurriculumService);
export { CurriculumService };
//# sourceMappingURL=curriculum.service.js.map