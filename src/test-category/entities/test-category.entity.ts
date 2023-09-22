import { Sequelize } from 'sequelize';
import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'Test_Category', timestamps: false })
export class TestCategory extends Model {
  @Column({
    field: 'Category_ID',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  categoryID: number;

  @Column({ field: 'Name', allowNull: false })
  name: string;

  @Column({ field: 'Company_ID', allowNull: false })
  companyID: number;

  @Column({ allowNull: false, defaultValue: true })
  Active: boolean;

  @Column({
    field: 'Created_Date',
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
  })
  createdDate: Date;
}
