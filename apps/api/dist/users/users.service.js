var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import * as argon2 from 'argon2';
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const passwordHash = await argon2.hash(dto.password);
        return this.prisma.user.create({
            data: {
                email: dto.email,
                passwordHash,
                role: 'STUDENT',
                learnerProfile: {
                    create: {
                        displayName: dto.displayName,
                        gradeLevel: dto.gradeLevel,
                    },
                },
            },
            include: {
                learnerProfile: true,
            },
        });
    }
    async updateOnboardingProfile(userId, payload) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { learnerProfile: true },
        });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return this.prisma.user.update({
            where: { id: userId },
            data: {
                learnerProfile: {
                    update: {
                        displayName: payload.nickname || user.learnerProfile?.displayName || '',
                    },
                },
            },
            include: {
                learnerProfile: true,
            },
        });
    }
    async updatePreferredLanguage(userId, language) {
        if (!['en', 'id', 'zh'].includes(language)) {
            throw new BadRequestException('Unsupported language. Use en, id, or zh.');
        }
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { learnerProfile: true },
        });
        if (!user || !user.learnerProfile) {
            throw new NotFoundException('User or learner profile not found');
        }
        return this.prisma.user.update({
            where: { id: userId },
            data: {
                learnerProfile: {
                    update: {
                        preferredLanguage: language,
                    },
                },
            },
            include: {
                learnerProfile: true,
            },
        });
    }
};
UsersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map