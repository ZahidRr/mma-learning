import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { PrismaModule } from './prisma/prisma.module.js';

import { UsersModule } from './users/users.module.js';
import { AuthModule } from './auth/auth.module.js';
import { CurriculumModule } from './curriculum/curriculum.module.js';
import { QuestionsModule } from './questions/questions.module.js';
import { AttemptsModule } from './attempts/attempts.module.js';
import { MasteryModule } from './mastery/mastery.module.js';
import { AdaptiveModule } from './adaptive/adaptive.module.js';
import { LessonSessionsModule } from './lesson-sessions/lesson-sessions.module.js';
import { ProgressModule } from './progress/progress.module.js';

import { HealthController } from './health/health.controller.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,
    UsersModule,
    AuthModule,
    CurriculumModule,
    QuestionsModule,
    MasteryModule,
    AdaptiveModule,
    LessonSessionsModule,
    AttemptsModule,
    ProgressModule,
  ],

  controllers: [
    AppController,
    HealthController,
  ],

  providers: [
    AppService,
  ],
})
export class AppModule {}