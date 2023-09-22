import { PartialType } from '@nestjs/swagger';
import { CreateTestCategoryDto } from './create-test-category.dto';

export class UpdateTestCategoryDto extends PartialType(CreateTestCategoryDto) {}
