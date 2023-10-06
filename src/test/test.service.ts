import { Injectable, Inject } from '@nestjs/common';
import { TestAssignment } from '../test-assignment/entities/test-assignment.entity';
import { TestAttempt } from '../test-attempt/entities/test-attempt.entity';
import { TEST_REPOSITORY, TEST_QUESTION_REPOSITORY } from '../core/constants';
import { TestQuestion } from '../test-question/entities/test-question.entity';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

import { Test } from './entities/test.entity';

@Injectable()
export class TestService {
  constructor(
    @Inject(TEST_REPOSITORY)
    private testsRepository: typeof Test,
    @Inject(TEST_QUESTION_REPOSITORY)
    private testQuestionRepository: typeof TestQuestion,
  ) {}

  async create(createTestDto: CreateTestDto) {
    return await this.testsRepository.create<Test>(createTestDto as any, {
      include: TestQuestion,
    });
  }

  async findAll(): Promise<Test[]> {
    return this.testsRepository.findAll<Test>();
  }

  async findAllWithAssignments() {
    return await this.testsRepository.findAll({
      include: [{ model: TestAssignment, include: [TestAttempt] }],
    });
  }

  async findAllWithAssignmentsForUser(userId: number) {
    return await this.testsRepository.findAll({
      include: [
        {
          model: TestAssignment,
          include: [TestAttempt],
          where: { assignedToID: userId },
        },
      ],
    });
  }

  async findAllActive() {
    return await this.testsRepository.findAll({
      where: { active: true },
    });
  }

  async findOne(id: number) {
    return await this.testsRepository.findOne({
      where: { testID: id },
      include: TestQuestion,
    });
  }

  async update(id: number, updateTestDto: UpdateTestDto) {
    return await this.testsRepository
      .update(updateTestDto, {
        where: { testID: id },
      })
      .then(async (updateResponse) => {
        updateTestDto.questions.forEach(async (question) => {
          await this.testQuestionRepository.upsert(question as any);
        });

        return updateResponse;
      });
  }

  async remove(id: number) {
    return await this.testsRepository.destroy({
      where: { testID: id },
    });
  }
}
