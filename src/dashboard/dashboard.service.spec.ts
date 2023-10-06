import { Test, TestingModule } from '@nestjs/testing';
import { DashboardService } from './dashboard.service';
import { TestService } from '../test/test.service';
import { TestCategoryService } from '../test-category/test-category.service';
import { TestAttemptService } from '../test-attempt/test-attempt.service';
import { UserService } from '../user/user.service';

describe('DashboardService', () => {
  let service: DashboardService;

  // Mock dependencies
  const testService = {};
  const testCategoryService = {};
  const testAttemptService = {};
  const userService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DashboardService,
        { provide: TestService, useValue: testService },
        { provide: TestCategoryService, useValue: testCategoryService },
        { provide: TestAttemptService, useValue: testAttemptService },
        { provide: UserService, useValue: userService },
      ],
    }).compile();

    service = module.get<DashboardService>(DashboardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('adminDashboardData should return truthy value', async () => {
    const result = await service.adminDashboardData();
    expect(result).toBeTruthy();
  });

  it('userDashboardData should return truthy value', async () => {
    const result = await service.userDashboardData(2); // Replace with a valid user ID
    expect(result).toBeTruthy();
  });

});
