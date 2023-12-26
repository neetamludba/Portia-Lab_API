import { TestAssignmentService } from './test-assignment.service';
import { CreateTestAssignmentDto } from './dto/create-test-assignment.dto';
export declare class TestAssignmentController {
    private readonly testAssignmentService;
    constructor(testAssignmentService: TestAssignmentService);
    create(createTestAssignmentDto: CreateTestAssignmentDto): Promise<import("./entities/test-assignment.entity").TestAssignment>;
    findAll(): Promise<import("./entities/test-assignment.entity").TestAssignment[]>;
    findOne(id: string): Promise<import("./entities/test-assignment.entity").TestAssignment>;
    findAllForTest(id: string): Promise<{
        testAssignmentID: number;
        assignedToID: number;
        assignedByID: number;
        assignedToName: string;
        assignedByName: string;
        assignedDate: Date;
    }[]>;
    findAllForUser(id: string): Promise<{
        testAssignmentID: number;
        testID: number;
        testDescription: string;
        assignedToID: number;
        assignedByID: number;
        assignedToName: string;
        assignedByName: string;
        assignedDate: Date;
        attempted: boolean;
    }[]>;
    remove(id: string): Promise<number>;
}
