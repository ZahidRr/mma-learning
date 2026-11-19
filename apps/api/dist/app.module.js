var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map