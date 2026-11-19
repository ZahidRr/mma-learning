import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class SubmitAnswerDto {
  @IsString()
  @IsNotEmpty()
  deliveryId: string;

  @IsString()
  @IsNotEmpty()
  answer: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  timeSpent?: number;
}