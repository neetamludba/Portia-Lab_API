import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test as TestModel } from './entities/test.entity';
import { TestQuestion } from '../test-question/entities/test-question.entity';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { testQuestionProvider } from '../test-question/entities/test-question.providers';
import { testProviders } from './entities/test.providers';
import { TestAssignment } from '../test-assignment/entities/test-assignment.entity';
import { TestAttempt } from '../test-attempt/entities/test-attempt.entity';
import { TestAnswer } from '../test-answer/entities/test-answer.entity';

describe('Test INTEGRATION TEST', () => {
  let controller: TestController;
  let activeTest: TestModel;
  let inActiveTest: TestModel;

  beforeEach(async () => {
    console.log('DB: ', process.env.TEST_DB_HOST);

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
            TestModel,
            TestQuestion,
            TestAssignment,
            TestAttempt,
            TestAnswer,
          ],
        }),
        SequelizeModule.forFeature([
          TestModel,
          TestQuestion,
          TestAssignment,
          TestAttempt,
          TestAnswer,
        ]),
      ],
      controllers: [TestController],
      providers: [TestService, ...testProviders, ...testQuestionProvider],
      exports: [SequelizeModule],
    }).compile();

    controller = module.get<TestController>(TestController);
  });

  it('Test => Create', async () => {
    let dto = new CreateTestDto();

    expect(controller.create(dto)).rejects.toThrow();

    dto.description = "Today's Test";
    expect(controller.create(dto)).rejects.toThrow();

    dto.companyID = 1;
    activeTest = await controller.create(dto);
    expect(activeTest).toBeTruthy;

    dto.description = "Tomorrow's Test";
    dto.active = false;
    inActiveTest = await controller.create(dto);
    expect(inActiveTest).toBeTruthy;
  });

  it('Test => Update', () => {
    let dto = new UpdateTestDto();

    dto.description = "Today's Test - " + new Date().toString();
    dto.questions = [];

    expect(
      controller.update(activeTest.testID.toString(), dto),
    ).resolves.toBeTruthy();
  });

  it('Test => Find All', async () => {
    let tests = await controller.findAll();

    expect(tests).toBeTruthy;
    expect(tests.length).toBeGreaterThanOrEqual(1);
  });

  it('Test => Find All Active', async () => {
    let tests = await controller.findAllActive();

    expect(tests).toBeTruthy;
    expect(tests.length).toBeGreaterThanOrEqual(1);
  });

  it('Test => Find One', () => {
    expect(controller.findOne(activeTest.testID.toString())).resolves
      .toBeTruthy;
  });

  it('Test => Delete', () => {
    expect(controller.remove(inActiveTest.testID.toString())).resolves
      .toBeTruthy;
  });
});
