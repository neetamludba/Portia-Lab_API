import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginResponseDto {
  @ApiProperty()
  @IsNotEmpty()
  userID: number;

  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  registerationDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  companyID: number;

  @ApiProperty()
  @IsNotEmpty()
  token: string;
}
