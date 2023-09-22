import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { TestAnswer } from '../../test-answer/entities/test-answer.entity';

export class CreateTestAttemptDto {
  @ApiProperty()
  @IsNotEmpty()
  testID: number;

  @ApiProperty()
  @IsNotEmpty()
  userID: number;

  @ApiProperty()
  @IsNotEmpty()
  testAssignmentID: number;

  @ApiProperty()
  @IsNotEmpty()
  answers: TestAnswer[];
}
