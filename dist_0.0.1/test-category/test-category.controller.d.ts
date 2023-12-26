import { TestCategoryService } from './test-category.service';
import { CreateTestCategoryDto } from './dto/create-test-category.dto';
import { UpdateTestCategoryDto } from './dto/update-test-category.dto';
export declare class TestCategoryController {
    private readonly testCategoryService;
    constructor(testCategoryService: TestCategoryService);
    create(createTestCategoryDto: CreateTestCategoryDto): Promise<import("./entities/test-category.entity").TestCategory>;
    findAll(): Promise<import("./entities/test-category.entity").TestCategory[]>;
    findAllActive(): Promise<import("./entities/test-category.entity").TestCategory[]>;
    findOne(id: string): Promise<import("./entities/test-category.entity").TestCategory>;
    update(id: string, updateTestCategoryDto: UpdateTestCategoryDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
