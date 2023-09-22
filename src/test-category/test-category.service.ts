import { Injectable, Inject } from '@nestjs/common';
import { CreateTestCategoryDto } from './dto/create-test-category.dto';
import { UpdateTestCategoryDto } from './dto/update-test-category.dto';
import { TEST_CATEGORY_REPOSITORY } from '../core/constants';
import { TestCategory } from './entities/test-category.entity';

@Injectable()
export class TestCategoryService {
  constructor(
    @Inject(TEST_CATEGORY_REPOSITORY)
    private readonly testCategoryRepository: typeof TestCategory,
  ) {}

  async create(
    createTestCategoryDto: CreateTestCategoryDto,
  ): Promise<TestCategory> {
    return await this.testCategoryRepository.create(createTestCategoryDto);
  }

  async findAll() {
    return await this.testCategoryRepository.findAll();
  }

  async findAllActive() {
    return await this.testCategoryRepository.findAll({
      where: { active: true },
    });
  }

  async findOne(id: number) {
    return await this.testCategoryRepository.findOne({
      where: { categoryID: id },
    });
  }

  async update(id: number, updateTestCategoryDto: UpdateTestCategoryDto) {
    return await this.testCategoryRepository.update(updateTestCategoryDto, {
      where: { categoryID: id },
    });
  }

  async remove(id: number) {
    return await this.testCategoryRepository.destroy({
      where: { categoryID: id },
    });
  }
}
