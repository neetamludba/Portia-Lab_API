import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTestAssignmentDto {
  @ApiProperty()
  @IsNotEmpty()
  testID: number;

  @ApiProperty()
  @IsNotEmpty()
  assignedByID: number;

  @ApiProperty()
  @IsNotEmpty()
  assignedToID: number;
}
