import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GetTestAssignmentDto {
  @ApiProperty()
  @IsNotEmpty()
  testAssignmentID: number;

  @ApiProperty()
  @IsNotEmpty()
  testID: number;

  @ApiProperty()
  @IsNotEmpty()
  assignedByID: number;

  @ApiProperty()
  @IsNotEmpty()
  assignedByName: string;

  @ApiProperty()
  @IsNotEmpty()
  assignedToID: number;

  @ApiProperty()
  @IsNotEmpty()
  assignedToName: string;

  @ApiProperty()
  @IsNotEmpty()
  assignedDate: Date;
}
