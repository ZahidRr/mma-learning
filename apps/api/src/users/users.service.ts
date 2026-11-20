import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
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

  async updateOnboardingProfile(
    userId: string,
    payload: { nickname: string; skillLevel: string; learningGoal: string },
  ) {
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

  async updatePreferredLanguage(userId: string, language: string) {
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
}