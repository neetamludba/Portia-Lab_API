import { Model } from 'sequelize-typescript';
export declare class TestCategory extends Model {
    categoryID: number;
    name: string;
    companyID: number;
    Active: boolean;
    createdDate: Date;
}
