import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTestCategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  companyID: number;

  @ApiProperty()
  @IsNotEmpty()
  active: boolean;
}
