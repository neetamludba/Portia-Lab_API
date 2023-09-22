import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTestAnswerDto {
  @ApiProperty()
  @IsNotEmpty()
  attemptID: number;

  @ApiProperty()
  @IsNotEmpty()
  questionID: number;

  @ApiProperty()
  @IsNotEmpty()
  skipped: boolean;

  @ApiProperty()
  @IsNotEmpty()
  answer: string;
}
