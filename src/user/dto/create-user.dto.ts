import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  strKey: string;

  @ApiProperty()
  @IsNotEmpty()
  companyID: number;
}
