import { CreateTestAnswerDto } from './dto/create-test-answer.dto';
import { UpdateTestAnswerDto } from './dto/update-test-answer.dto';
export declare class TestAnswerService {
    create(createTestAnswerDto: CreateTestAnswerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTestAnswerDto: UpdateTestAnswerDto): string;
    remove(id: number): string;
}
