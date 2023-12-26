import { TestQuestion } from '../../test-question/entities/test-question.entity';
export declare class CreateTestDto {
    description: string;
    companyID: number;
    categoryID: number;
    active: boolean;
    questions: TestQuestion[];
}
