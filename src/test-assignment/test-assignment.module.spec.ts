import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeModule } from '@nestjs/sequelize';

import { TestAssignmentController } from './test-assignment.controller';
import { TestAssignment } from './entities/test-assignment.entity';
import { TestAssignmentService } from './test-assignment.service';
import { testAssignmentProviders } from './entities/test-assignment.providers';
import { testProviders } from '../test/entities/test.providers';
import { userProviders } from '../user/entities/user.providers';
import { testAttemptProviders } from '../test-attempt/entities/test-attempt.providers';
import { Test as TestModel } from '../test/entities/test.entity';
import { TestAnswer } from '../test-answer/entities/test-answer.entity';
import { TestQuestion } from '../test-question/entities/test-question.entity';
import { User } from '../user/entities/user.entity';
import { TestAttempt } from '..//test-attempt/entities/test-attempt.entity';
import { CreateTestAssignmentDto } from './dto/create-test-assignment.dto';

describe('Test Assignment INTEGRATION TEST', () => {
  let controller: TestAssignmentController;
  let assignment: TestAssignment;

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
          models: [
            TestAssignment,
            TestModel,
            TestQuestion,
            TestAnswer,
            User,
            TestAttempt,
          ],
        }),
        SequelizeModule.forFeature([
          TestAssignment,
          TestModel,
          TestQuestion,
          TestAnswer,
          User,
          TestAttempt,
        ]),
      ],
      controllers: [TestAssignmentController],
      providers: [
        TestAssignmentService,
        ...testAssignmentProviders,
        ...testAttemptProviders,
        ...testProviders,
        ...userProviders,
      ],
      exports: [SequelizeModule],
    }).compile();

    controller = module.get<TestAssignmentController>(TestAssignmentController);
  });

  it('Test Assignment => Create', async () => {
    let dto = new CreateTestAssignmentDto();

    // expect(controller.create(dto)).rejects.toThrow();

    dto.testID = 3;
    // expect(controller.create(dto)).rejects.toThrow();

    dto.assignedByID = 1;
    // expect(controller.create(dto)).rejects.toThrow();

    dto.assignedToID = 2;
    assignment = await controller.create(dto);
    expect(assignment).toBeTruthy;
  });

  it('Test Assignment => Find One', async () => {
    let assign = await controller.findOne(
      assignment.testAssignmentID.toString(),
    );
    expect(assign).toBeTruthy;
  });

  it('Test Assignment => Find All', async () => {
    const result = await controller.findAll();
    expect(result).toBeTruthy();
  });  

  it('Test Assignment => Find All For Test', async () => {
    // Import to do it this way because of way findAllForTest is designed.
    let result = await controller.findAllForTest('1');
    expect(result).toBeTruthy;
  });

  it('Test Assignment => Find All For User', async () => {
    // Import to do it this way because of way findAllForUser is designed.
    let result = await controller.findAllForUser('2');
    expect(result).toBeTruthy;
  });

  it('Test Assignment => Delete', () => {
    expect(controller.remove(assignment.testAssignmentID.toString())).resolves
      .toBeTruthy;
  });
});
