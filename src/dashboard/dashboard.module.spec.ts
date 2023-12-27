import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeModule } from '@nestjs/sequelize';
import { createMock } from '@golevelup/ts-jest';

import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { DashboardController } from './dashboard.controller';
import { TestService } from '../test/test.service';
import { TestCategoryService } from '../test-category/test-category.service';
import { TestAttemptService } from '../test-attempt/test-attempt.service';
import { testProviders } from '../test/entities/test.providers';
import { testQuestionProvider } from '../test-question/entities/test-question.providers';
import { TestAssignment } from '../test-assignment/entities/test-assignment.entity';
import { TestAttempt } from '../test-attempt/entities/test-attempt.entity';
import { TestQuestion } from '../test-question/entities/test-question.entity';
import { TestAssignmentService } from '../test-assignment/test-assignment.service';
import { TestCategory } from '../test-category/entities/test-category.entity';
import { testCategoryProviders } from '../test-category/entities/test-category.providers';
import { testAttemptProviders } from '../test-attempt/entities/test-attempt.providers';
import { testAssignmentProviders } from '../test-assignment/entities/test-assignment.providers';
import { userProviders } from '../user/entities/user.providers';
import { JwtModule } from '@nestjs/jwt';
import { DashboardService } from './dashboard.service';
import { Test as TestModel } from '../test/entities/test.entity';
import { TestAnswer } from '../test-answer/entities/test-answer.entity';
import { MailService } from '../mail/mail.service';

describe('Dashboard E2E TEST', () => {
  let controller: DashboardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRoot({
          dialect: 'mysql',
          host: process.env.TEST_DB_HOST,
          port: Number(process.env.TEST_DB_PORT),
          username: process.env.TEST_DB_USER,
          password: process.env.TEST_DB_PASS,
          database: process.env.TEST_DB_NAME,
          autoLoadModels: true,
          synchronize: true,
          models: [User],
          logging: false,
        }),
        SequelizeModule.forFeature([
          User,
          TestModel,
          TestCategory,
          TestAssignment,
          TestAttempt,
          TestQuestion,
          TestAnswer,
        ]),
        JwtModule.register({
          secret: process.env.JWT_KEY,
          signOptions: {
            expiresIn: process.env.TOKEN_EXPIRY_HRS + 'h',
          },
        }),
      ],
      controllers: [DashboardController],
      providers: [
        TestService,
        TestCategoryService,
        TestAssignmentService,
        TestAttemptService,
        UserService,
        DashboardService,
        { provide: MailService, useValue: createMock<MailService>() },
        ...testProviders,
        ...testQuestionProvider,
        ...testCategoryProviders,
        ...testAttemptProviders,
        ...testAssignmentProviders,
        ...userProviders,
      ],
      exports: [SequelizeModule],
    }).compile();

    controller = module.get<DashboardController>(DashboardController);
  });

  it('Dashbboard => Admin', async () => {
    expect(await controller.adminDashboardData()).toBeTruthy;
    expect(await controller.categoryWiseScoresForAdmin()).toBeTruthy;
    expect(await controller.testWiseScoresForAdmin()).toBeTruthy;
  });

  it('Dashbboard => User', async () => {
    expect(await controller.userDashboardData('2')).toBeTruthy;
    expect(await controller.categoryWiseUserScoresForUser('2')).toBeTruthy;
    expect(await controller.testWiseUserScoresForUser('2')).toBeTruthy;
  });
});
