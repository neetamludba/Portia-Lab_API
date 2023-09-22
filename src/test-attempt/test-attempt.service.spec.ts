import { Test, TestingModule } from '@nestjs/testing';
import { TestAttemptService } from './test-attempt.service';

describe('TestAttemptService', () => {
  let service: TestAttemptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestAttemptService],
    }).compile();

    service = module.get<TestAttemptService>(TestAttemptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
