import { TestQuestionService } from './test-question.service';
import { CreateTestQuestionDto } from './dto/create-test-question.dto';
import { UpdateTestQuestionDto } from './dto/update-test-question.dto';
export declare class TestQuestionController {
    private readonly testQuestionService;
    constructor(testQuestionService: TestQuestionService);
    create(createTestQuestionDto: CreateTestQuestionDto): Promise<import("./entities/test-question.entity").TestQuestion>;
    findAll(id: string): Promise<import("./entities/test-question.entity").TestQuestion[]>;
    findAllActive(id: string): Promise<import("./entities/test-question.entity").TestQuestion[]>;
    findOne(id: string): Promise<import("./entities/test-question.entity").TestQuestion>;
    update(id: string, updateTestQuestionDto: UpdateTestQuestionDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
