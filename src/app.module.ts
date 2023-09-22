import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { TestCategoryModule } from './test-category/test-category.module';
import { TestModule } from './test/test.module';
import { TestQuestionModule } from './test-question/test-question.module';
import { TestAssignmentModule } from './test-assignment/test-assignment.module';
import { UserModule } from './user/user.module';
import { TestAttemptModule } from './test-attempt/test-attempt.module';
import { TestAnswerModule } from './test-answer/test-answer.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    TestCategoryModule,
    TestModule,
    TestQuestionModule,
    TestAssignmentModule,
    UserModule,
    TestAttemptModule,
    TestAnswerModule,
    AuthModule,
    MailModule,
    DashboardModule,
  ],
})
export class AppModule {}
