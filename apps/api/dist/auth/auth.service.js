var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { verify } from 'argon2';
import { PrismaService } from '../prisma/prisma.service.js';
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async login(input) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: input.email,
            },
            include: {
                learnerProfile: true,
            },
        });
        if (!user || user.status !== 'ACTIVE') {
            throw new UnauthorizedException('Invalid credentials');
        }
        const passwordValid = await verify(user.passwordHash, input.password);
        if (!passwordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const accessToken = await this.jwtService.signAsync({
            sub: user.id,
            email: user.email,
            role: user.role,
        });
        return {
            accessToken,
            user: {
                id: user.id,
                email: user.email,
                role: user.role,
                learnerProfile: user.learnerProfile
                    ? {
                        id: user.learnerProfile.id,
                        displayName: user.learnerProfile.displayName,
                        gradeLevel: user.learnerProfile.gradeLevel,
                    }
                    : null,
            },
        };
    }
    async getCurrentUser(userId) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                email: true,
                role: true,
                status: true,
                learnerProfile: {
                    select: {
                        id: true,
                        displayName: true,
                        gradeLevel: true,
                        avatarKey: true,
                    },
                },
            },
        });
        if (!user || user.status !== 'ACTIVE') {
            throw new UnauthorizedException();
        }
        return {
            id: user.id,
            email: user.email,
            role: user.role,
            learnerProfile: user.learnerProfile,
        };
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService,
        JwtService])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map