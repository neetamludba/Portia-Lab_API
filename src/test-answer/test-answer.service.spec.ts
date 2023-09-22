import { Test, TestingModule } from '@nestjs/testing';
import { TestAnswerService } from './test-answer.service';

describe('TestAnswerService', () => {
  let service: TestAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestAnswerService],
    }).compile();

    service = module.get<TestAnswerService>(TestAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
