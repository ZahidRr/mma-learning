import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import { AttemptsService } from './attempts.service.js';
import { SubmitAnswerDto } from './dto/submit-answer.dto.js';

@Controller('attempts')
export class AttemptsController {
  constructor(
    private readonly attemptsService: AttemptsService,
  ) {}

  @Post('submit')
  submitAnswer(
    @Body() dto: SubmitAnswerDto,
  ) {
    return this.attemptsService.submitAnswer(
      dto,
    );
  }
}