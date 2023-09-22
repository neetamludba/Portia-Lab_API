import { Test, TestingModule } from '@nestjs/testing';
import { testQuestionProvider } from '../test-question/entities/test-question.providers';
import { testProviders } from './entities/test.providers';
import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestService, ...testProviders, ...testQuestionProvider],
    }).compile();

    service = module.get<TestService>(TestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
