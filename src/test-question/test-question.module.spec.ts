import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeModule } from '@nestjs/sequelize';
import { TestQuestionController } from './test-question.controller';
import { TestQuestion } from './entities/test-question.entity';
import { TestQuestionService } from './test-question.service';
import { testQuestionProvider } from './entities/test-question.providers';
import { CreateTestQuestionDto } from './dto/create-test-question.dto';
import { UpdateTestQuestionDto } from './dto/update-test-question.dto';
import { Dialect } from 'sequelize/types';

describe('Test Question INTEGRATION TEST', () => {
  let controller: TestQuestionController;
  let activeQuestion: TestQuestion;
  let inActiveQuestion: TestQuestion;

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
          models: [TestQuestion],
        }),
        SequelizeModule.forFeature([TestQuestion]),
      ],
      controllers: [TestQuestionController],
      providers: [TestQuestionService, ...testQuestionProvider],
      exports: [SequelizeModule],
    }).compile();

    controller = module.get<TestQuestionController>(TestQuestionController);
  });

  it('Test Question => Create', async () => {
    let dto = new CreateTestQuestionDto();

    expect(controller.create(dto)).rejects.toThrow();

    dto.question = 'WHAT A DAY';
    expect(controller.create(dto)).rejects.toThrow();

    dto.testID = 14;
    dto.questionType = 1;
    dto.displayOrder = 1;
    dto.options = 'A,B,C';
    dto.correctAnswers = 'false, true, false';
    activeQuestion = await controller.create(dto);
    expect(activeQuestion).toBeTruthy;

    dto.question = 'WHAT IS TODAY';
    dto.questionType = 1;
    dto.active = false;
    dto.displayOrder = 2;
    dto.options = 'E,F,G';
    dto.correctAnswers = 'true, false, false';
    inActiveQuestion = await controller.create(dto);
    expect(inActiveQuestion).toBeTruthy;
  });

  it('Test Question => Update', () => {
    let dto = new UpdateTestQuestionDto();

    dto.question = 'WHAT IS TODAY - ' + new Date().toString();
    expect(
      controller.update(activeQuestion.questionID.toString(), dto),
    ).resolves.toBeTruthy();
  });

  it('Test Question => Find All', async () => {
    let questions = await controller.findAll('1');

    expect(questions).toBeTruthy;
    expect(questions.length).toBeGreaterThanOrEqual(0);
  });

  it('Test Question => Find All Active', async () => {
    let questions = await controller.findAllActive('1');

    expect(questions).toBeTruthy;
    expect(questions.length).toBeGreaterThanOrEqual(0);
  });

  it('Test Question => Find One', () => {
    expect(controller.findOne(activeQuestion.questionID.toString())).resolves
      .toBeTruthy;
  });

  it('Test Question => Delete', () => {
    expect(controller.remove(inActiveQuestion.questionID.toString())).resolves
      .toBeTruthy;
  });
});
