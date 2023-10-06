import { Test, TestingModule } from '@nestjs/testing';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

describe('DashboardController', () => {
  let controller: DashboardController;
  let dashboardService: DashboardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashboardController],
      providers: [DashboardService], // Add your service here
    }).compile();

    controller = module.get<DashboardController>(DashboardController);
    dashboardService = module.get<DashboardService>(DashboardService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call adminDashboardData method and return data', async () => {

    const result = await controller.adminDashboardData();

    expect(result).toBeTruthy;
  });

  it('should call userDashboardData method with the provided id and return data', async () => {

    const result = await controller.userDashboardData('2');

    expect(result).toBeTruthy;
    expect(dashboardService.userDashboardData).toHaveBeenCalledWith('2');
  });

});
