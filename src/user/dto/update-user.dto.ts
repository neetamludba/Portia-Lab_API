import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsNotEmpty()
  active: boolean;
}
