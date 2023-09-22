import { Test, TestingModule } from '@nestjs/testing';
import { TestAttemptController } from './test-attempt.controller';
import { TestAttemptService } from './test-attempt.service';

describe('TestAttemptController', () => {
  let controller: TestAttemptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestAttemptController],
      providers: [TestAttemptService],
    }).compile();

    controller = module.get<TestAttemptController>(TestAttemptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
