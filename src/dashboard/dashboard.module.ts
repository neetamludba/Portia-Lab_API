import { Module } from '@nestjs/common';
import { TestAttemptModule } from '../test-attempt/test-attempt.module';
import { TestCategoryModule } from '../test-category/test-category.module';
import { TestModule } from '../test/test.module';
import { UserModule } from '../user/user.module';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';

@Module({
  imports: [TestModule, TestCategoryModule, TestAttemptModule, UserModule],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule {}
