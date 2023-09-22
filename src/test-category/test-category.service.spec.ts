import { Test, TestingModule } from '@nestjs/testing';
import { testCategoryProviders } from './entities/test-category.providers';
import { TestCategoryService } from './test-category.service';

describe('TestCategoryService', () => {
  let service: TestCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestCategoryService, ...testCategoryProviders],
    }).compile();

    service = module.get<TestCategoryService>(TestCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
