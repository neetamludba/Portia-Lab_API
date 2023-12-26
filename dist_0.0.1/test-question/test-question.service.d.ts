import { CreateTestQuestionDto } from './dto/create-test-question.dto';
import { UpdateTestQuestionDto } from './dto/update-test-question.dto';
import { TestQuestion } from './entities/test-question.entity';
export declare class TestQuestionService {
    private testQuestionRepository;
    constructor(testQuestionRepository: typeof TestQuestion);
    create(createTestQuestionDto: CreateTestQuestionDto): Promise<TestQuestion>;
    findAll(testID: number): Promise<TestQuestion[]>;
    findAllActive(testID: number): Promise<TestQuestion[]>;
    findOne(id: number): Promise<TestQuestion>;
    update(id: number, updateTestQuestionDto: UpdateTestQuestionDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
