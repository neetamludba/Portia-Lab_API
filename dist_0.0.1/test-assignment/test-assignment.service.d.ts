import { CreateTestAssignmentDto } from './dto/create-test-assignment.dto';
import { TestAssignment } from './entities/test-assignment.entity';
import { User } from '../user/entities/user.entity';
import { Test } from '../test/entities/test.entity';
import { TestAttempt } from '../test-attempt/entities/test-attempt.entity';
export declare class TestAssignmentService {
    private readonly testAssignmentRepository;
    private readonly userRepository;
    private readonly testRepository;
    private readonly testAttemptRepositry;
    constructor(testAssignmentRepository: typeof TestAssignment, userRepository: typeof User, testRepository: typeof Test, testAttemptRepositry: typeof TestAttempt);
    create(createTestAssignmentDto: CreateTestAssignmentDto): Promise<TestAssignment>;
    findAll(): Promise<TestAssignment[]>;
    findOne(id: number): Promise<TestAssignment>;
    findAllForTest(id: number): Promise<{
        testAssignmentID: number;
        assignedToID: number;
        assignedByID: number;
        assignedToName: string;
        assignedByName: string;
        assignedDate: Date;
    }[]>;
    findAllForUser(id: number): Promise<{
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
    remove(id: number): Promise<number>;
}
