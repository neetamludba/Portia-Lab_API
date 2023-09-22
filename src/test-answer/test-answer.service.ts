import { Injectable } from '@nestjs/common';
import { CreateTestAnswerDto } from './dto/create-test-answer.dto';
import { UpdateTestAnswerDto } from './dto/update-test-answer.dto';

@Injectable()
export class TestAnswerService {
  create(createTestAnswerDto: CreateTestAnswerDto) {
    return 'This action adds a new testAnswer';
  }

  findAll() {
    return `This action returns all testAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testAnswer`;
  }

  update(id: number, updateTestAnswerDto: UpdateTestAnswerDto) {
    return `This action updates a #${id} testAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} testAnswer`;
  }
}
