import { Model } from 'sequelize-typescript';
export declare class TestQuestion extends Model {
    questionID: number;
    testID: number;
    question: string;
    questionType: number;
    displayOrder: number;
    mandatory: boolean;
    options: string;
    correctAnswers: string;
    active: boolean;
}
