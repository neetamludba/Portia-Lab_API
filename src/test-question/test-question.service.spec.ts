import { Test, TestingModule } from '@nestjs/testing';
import { testQuestionProvider } from './entities/test-question.providers';
import { TestQuestionService } from './test-question.service';

describe('TestQuestionService', () => {
  let service: TestQuestionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestQuestionService, ...testQuestionProvider],
    }).compile();

    service = module.get<TestQuestionService>(TestQuestionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
