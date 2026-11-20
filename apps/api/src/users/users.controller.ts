import { Body, Controller, Post, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Patch(':id/onboarding')
  updateOnboarding(
    @Param('id') userId: string,
    @Body() body: { nickname: string; skillLevel: string; learningGoal: string },
  ) {
    return this.usersService.updateOnboardingProfile(userId, body);
  }

  @Patch(':id/language')
  updateLanguage(
    @Param('id') userId: string,
    @Body() body: { language: string },
  ) {
    return this.usersService.updatePreferredLanguage(userId, body.language);
  }
}