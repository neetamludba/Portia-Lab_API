import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ForgetPasswordDto {
  @ApiProperty()
  @IsNotEmpty()
  email: string;
}
