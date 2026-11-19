import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import { StartLessonSessionDto } from './dto/start-lesson-session.dto.js';

import { LessonSessionsService } from './lesson-sessions.service.js';

@Controller('lesson-sessions')
export class LessonSessionsController {
  constructor(
    private readonly lessonSessionsService: LessonSessionsService,
  ) {}

  @Post('start')
  startSession(
    @Body() dto: StartLessonSessionDto,
  ) {
    return this.lessonSessionsService.startSession(
      dto,
    );
  }
}