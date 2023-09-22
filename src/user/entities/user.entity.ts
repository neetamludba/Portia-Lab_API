import { Sequelize } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'User', timestamps: false })
export class User extends Model {
  @Column({
    field: 'User_ID',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  userID: number;

  @Column({ field: 'First_Name', allowNull: false })
  firstName: string;

  @Column({ field: 'Last_Name', allowNull: false })
  lastName: string;

  @Column({ field: 'Email', allowNull: false })
  email: string;

  @Column({ field: 'Email_Confirmed', allowNull: false, defaultValue: false })
  emailConfirmed: boolean;

  @Column({ field: 'Password', allowNull: false })
  password: string;

  @Column({ field: 'StrKey', allowNull: false })
  strKey: string;

  @Column({
    field: 'Registration_Date',
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
  })
  registerationDate: Date;

  @Column({ field: 'Company_ID', allowNull: false })
  companyID: number;

  @Column({ allowNull: false, defaultValue: true })
  active: boolean;
}
