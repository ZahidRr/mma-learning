import { Module } from '@nestjs/common';

import { AdaptiveModule } from '../adaptive/adaptive.module.js';

import { QuestionsController } from './questions.controller.js';
import { QuestionsService } from './questions.service.js';

@Module({
  imports: [
    AdaptiveModule,
  ],

  controllers: [
    QuestionsController,
  ],

  providers: [
    QuestionsService,
  ],
})
export class QuestionsModule {}