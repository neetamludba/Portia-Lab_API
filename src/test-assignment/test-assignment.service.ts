import { Injectable, Inject } from '@nestjs/common';
import { CreateTestAssignmentDto } from './dto/create-test-assignment.dto';
import {
  TEST_ASSIGNMENT_REPOSITORY,
  USER_REPOSITORY,
  TEST_REPOSITORY,
  TEST_ATTEMPT_REPOSITORY,
} from '../core/constants';
import { TestAssignment } from './entities/test-assignment.entity';
import { User } from '../user/entities/user.entity';
import { Test } from '../test/entities/test.entity';
import { TestAttempt } from '../test-attempt/entities/test-attempt.entity';

@Injectable()
export class TestAssignmentService {
  constructor(
    @Inject(TEST_ASSIGNMENT_REPOSITORY)
    private readonly testAssignmentRepository: typeof TestAssignment,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: typeof User,
    @Inject(TEST_REPOSITORY)
    private readonly testRepository: typeof Test,
    @Inject(TEST_ATTEMPT_REPOSITORY)
    private readonly testAttemptRepositry: typeof TestAttempt,
  ) { }

  async create(
    createTestAssignmentDto: CreateTestAssignmentDto,
  ): Promise<TestAssignment> {
    return await this.testAssignmentRepository.create(createTestAssignmentDto as any);
  }

  async findAll() {
    return await this.testAssignmentRepository.findAll();
  }

  async findOne(id: number) {
    return await this.testAssignmentRepository.findOne({
      where: { testAssignmentID: id },
    });
  }

  async findAllForTest(id: number) {
    let assignments = await this.testAssignmentRepository.findAll({
      where: { testID: id },
    });

    let dto = assignments.map(async (x: TestAssignment) => {
      let toUser = await this.userRepository.findOne({
        where: { userID: x.assignedToID },
      });

      let byUser = await this.userRepository.findOne({
        where: { userID: x.assignedByID },
      });
      let assignedToName: string = '';
      let assignedByName: string = '';

      if (toUser) {
        assignedToName = toUser.firstName + ' ' + toUser.lastName;
      }
      if (byUser) {
        assignedByName = byUser.firstName + ' ' + byUser.lastName;
      }

      return {
        testAssignmentID: x.testAssignmentID,
        assignedToID: x.assignedToID,
        assignedByID: x.assignedByID,
        assignedToName: assignedToName,
        assignedByName: assignedByName,
        assignedDate: x.assignedDate,
      };
    });

    return Promise.all(dto);
  }

  async findAllForUser(id: number) {
    let assignments = await this.testAssignmentRepository.findAll({
      where: { assignedToID: id },
    });

    let dto = assignments.map(async (x: TestAssignment) => {
      let toUser = await this.userRepository.findOne({
        where: { userID: x.assignedToID },
      });

      let byUser = await this.userRepository.findOne({
        where: { userID: x.assignedByID },
      });

      let test = await this.testRepository.findOne({
        where: { testID: x.testID },
      });

      let assignment = await this.testAttemptRepositry.findOne({
        where: { testAssignmentID: x.testAssignmentID },
      });

      let assignedToName: string = '';
      let assignedByName: string = '';

      if (toUser) {
        assignedToName = toUser.firstName + ' ' + toUser.lastName;
      }
      if (byUser) {
        assignedByName = byUser.firstName + ' ' + byUser.lastName;
      }
      return {
        testAssignmentID: x.testAssignmentID,
        testID: x.testID,
        testDescription: test.description,
        assignedToID: x.assignedToID,
        assignedByID: x.assignedByID,
        assignedToName: assignedToName,
        assignedByName: assignedByName,
        assignedDate: x.assignedDate,
        attempted: assignment !== null,
      };
    });

    return Promise.all(dto);
  }

  async remove(id: number) {
    return await this.testAssignmentRepository.destroy({
      where: { testAssignmentID: id },
    });
  }
}
