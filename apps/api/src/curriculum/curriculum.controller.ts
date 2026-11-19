import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CurriculumService } from './curriculum.service.js';

@Controller('curriculum')
export class CurriculumController {
  constructor(private readonly curriculumService: CurriculumService) {}

  @Get()
  getCurriculum() {
    return this.curriculumService.getCurriculum();
  }

  @Get('subjects')
  getSubjects() {
    return this.curriculumService.getSubjects();
  }

  @Get('subjects/:subjectId/topics')
  getTopics(
    @Param('subjectId') subjectId: string,
    @Query('gradeLevel', new ParseIntPipe({ optional: true }))
    gradeLevel?: number,
  ) {
    return this.curriculumService.getTopics(subjectId, gradeLevel);
  }

  @Get('topics/:topicId/skills')
  getSkills(@Param('topicId') topicId: string) {
    return this.curriculumService.getSkills(topicId);
  }

  @Get('skills/:skillId/lessons')
  getLessons(@Param('skillId') skillId: string) {
    return this.curriculumService.getLessons(skillId);
  }
}