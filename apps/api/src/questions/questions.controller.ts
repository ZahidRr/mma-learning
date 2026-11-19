import {
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';

import { QuestionsService } from './questions.service.js';

@Controller('questions')
export class QuestionsController {
  constructor(
    private readonly questionsService: QuestionsService,
  ) {}

  // =====================================================
  // GET ALL QUESTIONS FOR A LESSON
  // =====================================================

  @Get('lessons/:lessonId')
  getLessonQuestions(
    @Param('lessonId') lessonId: string,
    @Query('userId') userId: string,
  ) {
    return this.questionsService.getLessonQuestions(
      lessonId,
      userId,
    );
  }

  // =====================================================
  // GET NEXT ADAPTIVE QUESTION
  // =====================================================

  @Get('lessons/:lessonId/next')
  getNextQuestion(
    @Param('lessonId') lessonId: string,
    @Query('sessionId') sessionId: string,
  ) {
    return this.questionsService.getNextQuestion(
      lessonId,
      sessionId,
    );
  }
}