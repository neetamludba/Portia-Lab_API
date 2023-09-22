import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DashboardService } from './dashboard.service';

@ApiTags('dashboard')
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('/admin')
  adminDashboardData() {
    return this.dashboardService.adminDashboardData();
  }

  @Get('/user/:id')
  userDashboardData(@Param('id') id: string) {
    return this.dashboardService.userDashboardData(+id);
  }

  @Get('/categorywisescores/foradmin')
  categoryWiseScoresForAdmin() {
    return this.dashboardService.categoryWiseUserScoresForAdmin();
  }

  @Get('/categorywiseuserscores/:id')
  categoryWiseUserScoresForUser(@Param('id') id: string) {
    return this.dashboardService.categoryWiseUserScoresForUser(+id);
  }

  @Get('/testwisescores/foradmin')
  testWiseScoresForAdmin() {
    return this.dashboardService.testWiseUserScoresForAdmin();
  }

  @Get('/testwiseuserscores/:id')
  testWiseUserScoresForUser(@Param('id') id: string) {
    return this.dashboardService.testWiseUserScoresForUser(+id);
  }
}
