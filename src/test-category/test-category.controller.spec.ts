import { Test, TestingModule } from '@nestjs/testing';
import { testCategoryProviders } from './entities/test-category.providers';
import { TestCategoryController } from './test-category.controller';
import { TestCategoryService } from './test-category.service';

describe('TestCategoryController', () => {
  let controller: TestCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestCategoryController],
      providers: [TestCategoryService, ...testCategoryProviders],
    }).compile();

    controller = module.get<TestCategoryController>(TestCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
