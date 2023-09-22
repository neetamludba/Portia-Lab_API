import { PartialType } from '@nestjs/swagger';
import { CreateTestQuestionDto } from './create-test-question.dto';

export class UpdateTestQuestionDto extends PartialType(CreateTestQuestionDto) {}
