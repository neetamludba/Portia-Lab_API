import { Model } from 'sequelize-typescript';
export declare class User extends Model {
    userID: number;
    firstName: string;
    lastName: string;
    email: string;
    emailConfirmed: boolean;
    password: string;
    registerationDate: Date;
    companyID: number;
    active: boolean;
}
