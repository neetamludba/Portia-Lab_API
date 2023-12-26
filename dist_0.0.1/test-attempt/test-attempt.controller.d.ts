import { TestAttemptService } from './test-attempt.service';
import { CreateTestAttemptDto } from './dto/create-test-attempt.dto';
export declare class TestAttemptController {
    private readonly testAttemptService;
    constructor(testAttemptService: TestAttemptService);
    create(createTestAttemptDto: CreateTestAttemptDto): Promise<import("./entities/test-attempt.entity").TestAttempt>;
    findOne(id: string): Promise<{
        attemptID: number;
        testID: number;
        userID: number;
        testAssignmentID: number;
        userName: string;
        testDescription: string;
        createdDate: Date;
        questionsAnswers: {
            questionID: number;
            question: string;
            questionType: number;
            displayOrder: number;
            mandatory: boolean;
            options: string;
            correctAnswers: string;
            answerID: number;
            answer: string;
            skipped: boolean;
        }[];
    }>;
    findOneForAssignment(id: string): Promise<{
        attemptID: number;
        testID: number;
        userID: number;
        testAssignmentID: number;
        userName: string;
        testDescription: string;
        createdDate: Date;
        questionsAnswers: {
            questionID: number;
            question: string;
            questionType: number;
            displayOrder: number;
            mandatory: boolean;
            options: string;
            correctAnswers: string;
            answerID: number;
            answer: string;
            skipped: boolean;
        }[];
    }>;
    findAllForTest(id: string): Promise<{
        attemptID: number;
        createdDate: Date;
        testAssignmentID: number;
        userID: number;
        userName: string;
        result: {
            questionID: number;
            question: string;
            questionType: number;
            displayOrder: number;
            skipped: boolean;
            isCorrect: boolean;
        }[];
    }[]>;
}
