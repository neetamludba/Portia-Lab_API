import { TestQuestion } from '../test-question/entities/test-question.entity';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Test } from './entities/test.entity';
export declare class TestService {
    private testsRepository;
    private testQuestionRepository;
    constructor(testsRepository: typeof Test, testQuestionRepository: typeof TestQuestion);
    create(createTestDto: CreateTestDto): Promise<Test>;
    findAll(): Promise<Test[]>;
    findAllWithAssignments(): Promise<Test[]>;
    findAllWithAssignmentsForUser(userId: number): Promise<Test[]>;
    findAllActive(): Promise<Test[]>;
    findOne(id: number): Promise<Test>;
    update(id: number, updateTestDto: UpdateTestDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
