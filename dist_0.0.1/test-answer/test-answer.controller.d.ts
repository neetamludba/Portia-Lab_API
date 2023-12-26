import { TestAnswerService } from './test-answer.service';
import { CreateTestAnswerDto } from './dto/create-test-answer.dto';
import { UpdateTestAnswerDto } from './dto/update-test-answer.dto';
export declare class TestAnswerController {
    private readonly testAnswerService;
    constructor(testAnswerService: TestAnswerService);
    create(createTestAnswerDto: CreateTestAnswerDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTestAnswerDto: UpdateTestAnswerDto): string;
    remove(id: string): string;
}
