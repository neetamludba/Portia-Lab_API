import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
export declare class TestController {
    private readonly testService;
    constructor(testService: TestService);
    create(createTestDto: CreateTestDto): Promise<import("./entities/test.entity").Test>;
    findAll(): Promise<import("./entities/test.entity").Test[]>;
    findAllActive(): Promise<import("./entities/test.entity").Test[]>;
    findOne(id: string): Promise<import("./entities/test.entity").Test>;
    update(id: string, updateTestDto: UpdateTestDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<number>;
}
