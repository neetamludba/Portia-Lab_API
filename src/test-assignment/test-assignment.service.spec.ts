import { Test, TestingModule } from '@nestjs/testing';
import { TestAssignmentService } from './test-assignment.service';

describe('TestAssignmentService', () => {
  let service: TestAssignmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestAssignmentService],
    }).compile();

    service = module.get<TestAssignmentService>(TestAssignmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
