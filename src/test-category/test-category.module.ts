import { Module } from '@nestjs/common';
import { TestCategoryService } from './test-category.service';
import { TestCategoryController } from './test-category.controller';
import { testCategoryProviders } from './entities/test-category.providers';

@Module({
  controllers: [TestCategoryController],
  providers: [TestCategoryService, ...testCategoryProviders],
  exports: [TestCategoryService],
})
export class TestCategoryModule {}
