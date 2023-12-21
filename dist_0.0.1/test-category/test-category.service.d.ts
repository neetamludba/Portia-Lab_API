import { CreateTestCategoryDto } from './dto/create-test-category.dto';
import { UpdateTestCategoryDto } from './dto/update-test-category.dto';
import { TestCategory } from './entities/test-category.entity';
export declare class TestCategoryService {
    private readonly testCategoryRepository;
    constructor(testCategoryRepository: typeof TestCategory);
    create(createTestCategoryDto: CreateTestCategoryDto): Promise<TestCategory>;
    findAll(): Promise<TestCategory[]>;
    findAllActive(): Promise<TestCategory[]>;
    findOne(id: number): Promise<TestCategory>;
    update(id: number, updateTestCategoryDto: UpdateTestCategoryDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
}
