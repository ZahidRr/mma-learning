var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';
let AppController = class AppController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
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
                const lesson = await this.prisma.lesson.upsert({
                    where: {
                        id: data.lessonId,
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
                await this.prisma.question.deleteMany({
                    where: { lessonId: lesson.id },
                });
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
        }
        catch (error) {
            console.error('Error saat seeding data:', error);
            return {
                status: 'ERROR',
                message: 'Gagal melakukan seeding data.',
                error: error.message,
            };
        }
    }
};
__decorate([
    Get('seed-production'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "seedProductionData", null);
AppController = __decorate([
    Controller(),
    __metadata("design:paramtypes", [PrismaService])
], AppController);
export { AppController };
//# sourceMappingURL=app.controller.js.map