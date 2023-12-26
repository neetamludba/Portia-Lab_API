import { Model } from 'sequelize-typescript';
export declare class TestAnswer extends Model {
    answerID: number;
    attemptID: number;
    questionID: number;
    skipped: boolean;
    answer: string;
    createdDate: Date;
}
