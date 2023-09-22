import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { TestQuestion } from '../../test-question/entities/test-question.entity';

export class CreateTestDto {
  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  companyID: number;

  @ApiProperty()
  categoryID: number;

  @ApiProperty()
  @IsNotEmpty()
  active: boolean;

  questions: TestQuestion[];
}
