import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('seed-production')
  async seedProductionData() {
    console.log('Memulai proses seeding data Go-Live...');

    const productionData = [
      {
        subjectName: 'Mathematics',
        subjectSlug: 'mathematics',
        topicName: 'Basic Arithmetic',
        topicSlug: 'basic-arithmetic-grade-1',
        skillName: 'Addition Within 10',
        skillSlug: 'addition-within-10',
        lessonId: 'lesson_math_01',
        lessonTitle: 'Number Meadow: The Beginning',
        lessonSlug: 'number-meadow-01',
        questions: [
          {
            code: 'math_q1',
            prompt: 'You found 5 glowing apples in the forest, and your friend gave you 4 more. How many apples do you have in total?',
            options: [
              { text: '8 apples', isCorrect: false },
              { text: '9 apples', isCorrect: true },
              { text: '10 apples', isCorrect: false },
              { text: '7 apples', isCorrect: false },
            ],
          },
          {
            code: 'math_q2',
            prompt: 'A wizard had 12 magic potions. He accidentally dropped 5 of them. How many potions are left?',
            options: [
              { text: '5 potions', isCorrect: false },
              { text: '6 potions', isCorrect: false },
              { text: '7 potions', isCorrect: true },
              { text: '8 potions', isCorrect: false },
            ],
          },
          {
            code: 'math_q3',
            prompt: 'There are 3 treasure chests. Each chest contains 4 gold coins. How many gold coins are there in total?',
            options: [
              { text: '7 coins', isCorrect: false },
              { text: '10 coins', isCorrect: false },
              { text: '12 coins', isCorrect: true },
              { text: '15 coins', isCorrect: false },
            ],
          },
        ],
      },
      {
        subjectName: 'English',
        subjectSlug: 'english',
        topicName: 'Vocabulary & Grammar',
        topicSlug: 'vocab-grammar-grade-1',
        skillName: 'Basic Nouns & Verbs',
        skillSlug: 'basic-nouns-verbs',
        lessonId: 'lesson_eng_01',
        lessonTitle: 'The Whispering Woods',
        lessonSlug: 'whispering-woods-01',
        questions: [
          {
            code: 'eng_q1',
            prompt: 'Look at that beautiful creature! It has wings, colorful feathers, and it can fly. What is it?',
            options: [
              { text: 'A dog', isCorrect: false },
              { text: 'A fish', isCorrect: false },
              { text: 'A bird', isCorrect: true },
              { text: 'A cat', isCorrect: false },
            ],
          },
          {
            code: 'eng_q2',
            prompt: "Choose the correct word: 'Every morning, the brave knight _____ his shiny armor.'",
            options: [
              { text: 'wear', isCorrect: false },
              { text: 'wears', isCorrect: true },
              { text: 'wearing', isCorrect: false },
              { text: 'worn', isCorrect: false },
            ],
          },
          {
            code: 'eng_q3',
            prompt: 'I have a face and two hands, but I have no arms or legs. I can tell you the time. What am I?',
            options: [
              { text: 'A clock', isCorrect: true },
              { text: 'A ghost', isCorrect: false },
              { text: 'A robot', isCorrect: false },
              { text: 'A book', isCorrect: false },
            ],
          },
        ],
      },
    ];

    try {
      // 1. Buat Curriculum
      const curriculum = await this.prisma.curriculum.upsert({
        where: { code: 'primary-core' },
        update: {},
        create: {
          name: 'Primary Core Curriculum',
          code: 'primary-core',
          status: 'PUBLISHED',
        },
      });

      for (const data of productionData) {
        // 2. Buat Subject
        const subject = await this.prisma.subject.upsert({
          where: {
            curriculumId_slug: { curriculumId: curriculum.id, slug: data.subjectSlug },
          },
          update: {},
          create: {
            name: data.subjectName,
            slug: data.subjectSlug,
            curriculumId: curriculum.id,
            status: 'PUBLISHED',
          },
        });

        // 3. Buat Topic
        const topic = await this.prisma.topic.upsert({
          where: {
            subjectId_gradeLevel_slug: {
              subjectId: subject.id,
              gradeLevel: 1,
              slug: data.topicSlug,
            },
          },
          update: {},
          create: {
            name: data.topicName,
            slug: data.topicSlug,
            gradeLevel: 1,
            subjectId: subject.id,
            status: 'PUBLISHED',
          },
        });

        // 4. Buat Skill
        const skill = await this.prisma.skill.upsert({
          where: {
            topicId_slug: { topicId: topic.id, slug: data.skillSlug },
          },
          update: {},
          create: {
            name: data.skillName,
            slug: data.skillSlug,
            topicId: topic.id,
            status: 'PUBLISHED',
          },
        });

        // 5. Buat Lesson (Pencarian langsung menggunakan ID agar tidak bentrok)
        const lesson = await this.prisma.lesson.upsert({
          where: {
            id: data.lessonId, // <--- INI KUNCI PERBAIKANNYA
          },
          update: { 
            title: data.lessonTitle,
            slug: data.lessonSlug,
            skillId: skill.id, 
          }, 
          create: {
            id: data.lessonId, 
            title: data.lessonTitle,
            slug: data.lessonSlug,
            skillId: skill.id,
            xpReward: 50,
            status: 'PUBLISHED',
          },
        });

        // 6. Bersihkan Question Lama
        await this.prisma.question.deleteMany({
          where: { lessonId: lesson.id },
        });

        // 7. Insert Question & Options Sekaligus
        for (const q of data.questions) {
          await this.prisma.question.create({
            data: {
              code: q.code,
              lessonId: lesson.id,
              skillId: skill.id,
              type: 'MULTIPLE_CHOICE', 
              source: 'FIXED', 
              difficulty: 'MEDIUM', 
              prompt: q.prompt,
              status: 'PUBLISHED',
              options: {
                create: q.options.map((opt, index) => ({
                  text: opt.text,
                  isCorrect: opt.isCorrect,
                  orderIndex: index,
                })),
              },
            },
          });
        }
      }

      return {
        status: 'SUCCESS',
        message: 'Data Produksi berhasil ditambahkan! 🚀',
      };
    } catch (error: any) {
      console.error('Error saat seeding data:', error);
      return {
        status: 'ERROR',
        message: 'Gagal melakukan seeding data.',
        error: error.message,
      };
    }
  }
}