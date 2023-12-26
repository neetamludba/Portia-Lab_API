import { Model } from 'sequelize-typescript';
import { TestAttempt } from '../../test-attempt/entities/test-attempt.entity';
export declare class TestAssignment extends Model {
    testAssignmentID: number;
    testID: number;
    assignedByID: number;
    assignedToID: number;
    assignedDate: Date;
    attempts: TestAttempt[];
}
