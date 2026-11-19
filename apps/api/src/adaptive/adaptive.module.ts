import { Module } from '@nestjs/common';

import { AdaptiveService } from './adaptive.service.js';

@Module({
  providers: [
    AdaptiveService,
  ],

  exports: [
    AdaptiveService,
  ],
})
export class AdaptiveModule {}