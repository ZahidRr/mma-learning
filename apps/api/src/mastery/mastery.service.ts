import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

type UpdateMasteryInput = {
  userId: string;
  skillId: string;
  isCorrect: boolean;
};

@Injectable()
export class MasteryService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async updateSkillMastery(
    input: UpdateMasteryInput,
  ) {
    const existingMastery =
      await this.prisma.skillMastery.findUnique({
        where: {
          userId_skillId: {
            userId: input.userId,
            skillId: input.skillId,
          },
        },
      });

    const previousTotalAttempts =
      existingMastery?.totalAttempts ?? 0;

    const previousCorrectAttempts =
      existingMastery?.correctAttempts ?? 0;

    const totalAttempts =
      previousTotalAttempts + 1;

    const correctAttempts =
      previousCorrectAttempts +
      (input.isCorrect ? 1 : 0);

    const masteryScore =
      (correctAttempts / totalAttempts) * 100;

    const mastery =
      await this.prisma.skillMastery.upsert({
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

      masteryScore:
        Math.round(mastery.masteryScore * 100) /
        100,

      totalAttempts:
        mastery.totalAttempts,

      correctAttempts:
        mastery.correctAttempts,
    };
  }

  async getSkillMastery(
    userId: string,
    skillId: string,
  ) {
    return this.prisma.skillMastery.findUnique({
      where: {
        userId_skillId: {
          userId,
          skillId,
        },
      },
    });
  }

  async getUserMasteries(userId: string) {
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
}