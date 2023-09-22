import { Test, TestingModule } from '@nestjs/testing';
import { testQuestionProvider } from '../test-question/entities/test-question.providers';
import { testProviders } from './entities/test.providers';
import { TestController } from './test.controller';
import { TestService } from './test.service';

describe('TestController', () => {
  let controller: TestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestController],
      providers: [TestService, ...testProviders, ...testQuestionProvider],
    }).compile();

    controller = module.get<TestController>(TestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
