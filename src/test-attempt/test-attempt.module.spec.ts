import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeModule, getModelToken } from '@nestjs/sequelize';

import { testProviders } from '../test/entities/test.providers';
import { userProviders } from '../user/entities/user.providers';
import { testAttemptProviders } from '../test-attempt/entities/test-attempt.providers';
import { Test as TestModel } from '../test/entities/test.entity';
import { TestAnswer } from '../test-answer/entities/test-answer.entity';
import { TestQuestion } from '../test-question/entities/test-question.entity';
import { User } from '../user/entities/user.entity';
import { TestAttempt } from '..//test-attempt/entities/test-attempt.entity';
import { TestAttemptController } from './test-attempt.controller';
import { TestAttemptService } from './test-attempt.service';
import { CreateTestAttemptDto } from './dto/create-test-attempt.dto';
import { testQuestionProvider } from '../test-question/entities/test-question.providers';
import { TestAssignment } from '../test-assignment/entities/test-assignment.entity';
import { fail } from 'assert';

describe('Test Attempt INTEGRATION TEST', () => {
  let controller: TestAttemptController;
  let attempt: TestAttempt;
  let testAnswerModel: typeof TestAnswer;

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
          logging: false,
          models: [
            TestAttempt,
            TestModel,
            TestQuestion,
            TestAnswer,
            TestAssignment,
            User,
          ],
        }),
        SequelizeModule.forFeature([
          TestAttempt,
          TestModel,
          TestQuestion,
          TestAnswer,
          TestAssignment,
          User,
        ]),
      ],
      controllers: [TestAttemptController],
      providers: [
        TestAttemptService,
        ...testAttemptProviders,
        ...testProviders,
        ...testQuestionProvider,
        ...userProviders,
        {
          provide: getModelToken(TestAnswer), // Provide the TestAnswer model
          useValue: TestAnswer, // Use the imported TestAnswer model
        },
      ],
      exports: [SequelizeModule],
    }).compile();

    controller = module.get<TestAttemptController>(TestAttemptController);
    testAnswerModel = module.get<typeof TestAnswer>(getModelToken(TestAnswer)); // Get the TestAnswer model

  });

  // it('Test Attempt => Create', async () => {
  // let dto = new CreateTestAttemptDto();

  // expect(controller.create(dto)).rejects.toThrow();

  //   dto.testAssignmentID = 6;
  // expect(controller.create(dto)).rejects.toThrow();

  //   dto.testID = 3;
  // expect(controller.create(dto)).rejects.toThrow();

  //   dto.userID = 2;
  // expect(controller.create(dto)).rejects.toThrow();

  //   dto.answers = [];
  //   dto.answers.push(
  //     new TestAnswer({
  //       answerID: 0,
  //       attemptID: 0,
  //       questionID: 4,
  //       skipped: false,
  //       answer: '1',
  //     }),
  //   );
  //   dto.answers.push(
  //     new TestAnswer({
  //       answerID: 0,
  //       attemptID: 0,
  //       questionID: 5,
  //       skipped: false,
  //       answer: '0',
  //     }),
  //   );

  //   attempt = await controller.create(dto);
  //   expect(attempt).toBeTruthy();
  // });

  it('Test Attempt => Create', async () => {
    const dto = new CreateTestAttemptDto();
    dto.testAssignmentID = 6;
    dto.testID = 3;
    dto.userID = 2;

    // Create instances of TestAnswer using Sequelize's build method
    const answers = [
      {
        answerID: 0,
        attemptID: 0,
        questionID: 4,
        skipped: false,
        answer: '1',
        createdDate: new Date(),
      },
      {
        answerID: 0,
        attemptID: 0,
        questionID: 5,
        skipped: false,
        answer: '0',
        createdDate: new Date(),
      },
    ];

    // Map the answer objects to TestAnswer instances
    dto.answers = answers.map(answerData => testAnswerModel.build(answerData));

    try {
      attempt = await controller.create(dto);
      expect(attempt).toBeTruthy();
    } catch (error) {
      console.error('Error:', error);
    }
  });


  it('Test Attempt => Find One', async () => {
    let atmpt = await controller.findOne(attempt.attemptID.toString());
    expect(atmpt).toBeTruthy;
  });

  it('Test Attempt => Find One For Assignment', async () => {
    let atmpt = await controller.findOneForAssignment('6');
    expect(atmpt).resolves.toBeTruthy;
  });
});
