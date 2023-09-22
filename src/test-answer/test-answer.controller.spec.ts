import { Test, TestingModule } from '@nestjs/testing';
import { TestAnswerController } from './test-answer.controller';
import { TestAnswerService } from './test-answer.service';

describe('TestAnswerController', () => {
  let controller: TestAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestAnswerController],
      providers: [TestAnswerService],
    }).compile();

    controller = module.get<TestAnswerController>(TestAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
