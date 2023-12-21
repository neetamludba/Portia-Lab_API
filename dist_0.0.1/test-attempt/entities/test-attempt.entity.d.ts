import { Model } from 'sequelize-typescript';
import { TestAnswer } from '../../test-answer/entities/test-answer.entity';
export declare class TestAttempt extends Model {
    attemptID: number;
    testID: number;
    userID: number;
    testAssignmentID: number;
    createdDate: Date;
    answers: TestAnswer[];
}
