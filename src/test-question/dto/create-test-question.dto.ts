import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTestQuestionDto {
  @ApiProperty()
  @IsNotEmpty()
  testID: number;

  @ApiProperty()
  @IsNotEmpty()
  question: string;

  @ApiProperty()
  @IsNotEmpty()
  questionType: number;

  @ApiProperty()
  @IsNotEmpty()
  displayOrder: number;

  @ApiProperty()
  @IsNotEmpty()
  mandatory: boolean;

  @ApiProperty()
  @IsNotEmpty()
  options: string;

  @ApiProperty()
  @IsNotEmpty()
  correctAnswers: string;

  @ApiProperty()
  @IsNotEmpty()
  active: boolean;
}
