import {
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class StartLessonSessionDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  lessonId: string;
}