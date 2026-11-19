import { Module } from '@nestjs/common';

import { AdaptiveModule } from '../adaptive/adaptive.module.js';
import { LessonSessionsModule } from '../lesson-sessions/lesson-sessions.module.js';
import { MasteryModule } from '../mastery/mastery.module.js';

import { AttemptsController } from './attempts.controller.js';
import { AttemptsService } from './attempts.service.js';

@Module({
  imports: [
    MasteryModule,
    AdaptiveModule,
    LessonSessionsModule,
  ],

  controllers: [
    AttemptsController,
  ],

  providers: [
    AttemptsService,
  ],
})
export class AttemptsModule {}