import { CreateTestAttemptDto } from './dto/create-test-attempt.dto';
import { TestAttempt } from './entities/test-attempt.entity';
import { User } from '../user/entities/user.entity';
import { Test } from '../test/entities/test.entity';
import { TestQuestion } from '../test-question/entities/test-question.entity';
export declare class TestAttemptService {
    private testAttemptRepository;
    private readonly userRepository;
    private readonly testRepository;
    private readonly testQuestionRepository;
    constructor(testAttemptRepository: typeof TestAttempt, userRepository: typeof User, testRepository: typeof Test, testQuestionRepository: typeof TestQuestion);
    create(createTestAttemptDto: CreateTestAttemptDto): Promise<TestAttempt>;
    findOne(id: number): Promise<{
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
    findOneForAssignment(id: number): Promise<{
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
    findAllForTest(id: number): Promise<{
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
    remove(id: number): Promise<string>;
    private getAllAttemptsDTO;
    private getAttemptDTO;
    private getAttemptResultDTO;
}
