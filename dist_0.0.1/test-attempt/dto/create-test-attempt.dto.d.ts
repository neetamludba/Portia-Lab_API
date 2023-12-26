import { TestAnswer } from '../../test-answer/entities/test-answer.entity';
export declare class CreateTestAttemptDto {
    testID: number;
    userID: number;
    testAssignmentID: number;
    answers: TestAnswer[];
}
