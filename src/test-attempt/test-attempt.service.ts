import { ConflictException, Inject, Injectable } from '@nestjs/common';
import {
  TEST_ATTEMPT_REPOSITORY,
  USER_REPOSITORY,
  TEST_REPOSITORY,
  TEST_QUESTION_REPOSITORY,
} from '../core/constants';
import { CreateTestAttemptDto } from './dto/create-test-attempt.dto';
import { TestAnswer } from '../test-answer/entities/test-answer.entity';
import { TestAttempt } from './entities/test-attempt.entity';
import { User } from '../user/entities/user.entity';
import { Test } from '../test/entities/test.entity';
import { TestQuestion } from '../test-question/entities/test-question.entity';

@Injectable()
export class TestAttemptService {
  constructor(
    @Inject(TEST_ATTEMPT_REPOSITORY)
    private testAttemptRepository: typeof TestAttempt,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: typeof User,
    @Inject(TEST_REPOSITORY)
    private readonly testRepository: typeof Test,
    @Inject(TEST_QUESTION_REPOSITORY)
    private readonly testQuestionRepository: typeof TestQuestion,
  ) {}

  async create(createTestAttemptDto: CreateTestAttemptDto) {
    if (
      !createTestAttemptDto.answers ||
      createTestAttemptDto.answers.length == 0
    )
      return Promise.reject(new Error('No answers found in attempt'));

    return await this.testAttemptRepository.create(createTestAttemptDto, {
      include: TestAnswer,
    });
  }

  async findOne(id: number) {
    let attempt = await this.testAttemptRepository.findOne({
      where: { attemptID: id },
      include: TestAnswer,
    });
    return this.getAttemptDTO(attempt);
  }

  async findOneForAssignment(id: number) {
    let attempt = await this.testAttemptRepository.findOne({
      where: { testAssignmentID: id },
      include: TestAnswer,
    });
    return this.getAttemptDTO(attempt);
  }

  async findAllForTest(id: number) {
    let attempts = await this.testAttemptRepository.findAll({
      where: { testID: id },
      include: TestAnswer,
    });

    return this.getAllAttemptsDTO(attempts);
  }

  async remove(id: number) {
    return `This action removes a #${id} testAttempt`;
  }

  private async getAllAttemptsDTO(attempts: TestAttempt[]) {
    let dto = attempts.map(async (x: TestAttempt) => {
      return await this.getAttemptResultDTO(x);
    });

    return Promise.all(dto);
  }

  private async getAttemptDTO(attempt: TestAttempt) {
    const user = await this.userRepository.findOne({
      where: { userID: attempt.userID },
    });

    const test = await this.testRepository.findOne({
      where: { testID: attempt.testID },
      include: TestQuestion,
    });

    const questionsAnswers = test.questions.map((q) => {
      const ans = attempt.answers.find((a) => a.questionID === q.questionID);

      if (ans)
        return {
          questionID: q.questionID,
          question: q.question,
          questionType: q.questionType,
          displayOrder: q.displayOrder,
          mandatory: q.mandatory,
          options: q.options,
          correctAnswers: q.correctAnswers,
          answerID: ans.answerID,
          answer: ans.answer,
          skipped: ans.skipped,
        };
      else return null;
    });

    return {
      attemptID: attempt.attemptID,
      testID: attempt.testID,
      userID: attempt.userID,
      testAssignmentID: attempt.testAssignmentID,
      userName: user.firstName + ' ' + user.lastName,
      testDescription: test.description,
      createdDate: attempt.createdDate,
      questionsAnswers: questionsAnswers,
    };
  }

  private async getAttemptResultDTO(attempt: TestAttempt) {
    const user = await this.userRepository.findOne({
      where: { userID: attempt.userID },
    });

    const testQuestions = await this.testQuestionRepository.findAll({
      where: { testID: attempt.testID },
    });

    const questionsResults = testQuestions.map((q) => {
      const ans = attempt.answers.find((a) => a.questionID === q.questionID);

      if (ans) {
        let isCorrect = true;

        if (q.questionType == 1)
          isCorrect =
            q.correctAnswers.split(',')[Number(ans.answer)] === 'true';
        else {
          ans.answer.split(',').forEach((answer) => {
            if (q.correctAnswers.split(',')[Number(answer)] === 'true')
              isCorrect = isCorrect;
            else isCorrect = false;
          });
        }

        return {
          questionID: q.questionID,
          question: q.question,
          questionType: q.questionType,
          displayOrder: q.displayOrder,
          skipped: ans.skipped,
          isCorrect: isCorrect,
        };
      } else return null;
    });

    return {
      attemptID: attempt.attemptID,
      createdDate: attempt.createdDate,
      testAssignmentID: attempt.testAssignmentID,
      userID: attempt.userID,
      userName: user.firstName + ' ' + user.lastName,
      result: questionsResults.sort(
        (a, b) => a?.displayOrder - b?.displayOrder,
      ),
    };
  }
}
