import { Model } from 'sequelize-typescript';
import { TestAssignment } from '../../test-assignment/entities/test-assignment.entity';
import { TestQuestion } from '../../test-question/entities/test-question.entity';
export declare class Test extends Model {
    testID: number;
    description: string;
    createdDate: Date;
    companyID: number;
    categoryID: number;
    active: boolean;
    questions: TestQuestion[];
    assignments: TestAssignment[];
}
