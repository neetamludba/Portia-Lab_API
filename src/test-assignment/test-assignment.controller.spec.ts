import { Test, TestingModule } from '@nestjs/testing';
import { TestAssignmentController } from './test-assignment.controller';
import { TestAssignmentService } from './test-assignment.service';

describe('TestAssignmentController', () => {
  let controller: TestAssignmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestAssignmentController],
      providers: [TestAssignmentService],
    }).compile();

    controller = module.get<TestAssignmentController>(TestAssignmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
