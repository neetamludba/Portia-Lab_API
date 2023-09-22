import { Inject, Injectable } from '@nestjs/common';
import { TEST_QUESTION_REPOSITORY } from '../core/constants';
import { CreateTestQuestionDto } from './dto/create-test-question.dto';
import { UpdateTestQuestionDto } from './dto/update-test-question.dto';
import { TestQuestion } from './entities/test-question.entity';

@Injectable()
export class TestQuestionService {
  constructor(
    @Inject(TEST_QUESTION_REPOSITORY)
    private testQuestionRepository: typeof TestQuestion,
  ) {}

  async create(createTestQuestionDto: CreateTestQuestionDto) {
    return await this.testQuestionRepository.create(createTestQuestionDto);
  }

  async findAll(testID: number) {
    return await this.testQuestionRepository.findAll({
      where: { testID: testID },
    });
  }

  async findAllActive(testID: number) {
    return await this.testQuestionRepository.findAll({
      where: { testID: testID, active: true },
    });
  }

  async findOne(id: number) {
    return await this.testQuestionRepository.findOne({
      where: { questionID: id },
    });
  }

  async update(id: number, updateTestQuestionDto: UpdateTestQuestionDto) {
    return await this.testQuestionRepository.update(updateTestQuestionDto, {
      where: { questionID: id },
    });
  }

  async remove(id: number) {
    return await this.testQuestionRepository.destroy({
      where: { questionID: id },
    });
  }
}
