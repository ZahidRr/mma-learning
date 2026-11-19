import { Module } from '@nestjs/common';

import { LessonSessionsController } from './lesson-sessions.controller.js';

import { LessonSessionsService } from './lesson-sessions.service.js';

@Module({
  controllers: [
    LessonSessionsController,
  ],

  providers: [
    LessonSessionsService,
  ],

  exports: [
    LessonSessionsService,
  ],
})
export class LessonSessionsModule {}