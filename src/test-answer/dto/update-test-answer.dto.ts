import { PartialType } from '@nestjs/swagger';
import { CreateTestAnswerDto } from './create-test-answer.dto';

export class UpdateTestAnswerDto extends PartialType(CreateTestAnswerDto) {}
