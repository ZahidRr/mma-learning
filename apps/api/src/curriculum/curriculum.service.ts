import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class CurriculumService {
  constructor(private readonly prisma: PrismaService) {}

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

  async getTopics(subjectId: string, gradeLevel?: number) {
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

  async getSkills(topicId: string) {
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

  async getLessons(skillId: string) {
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
}