import { Sequelize } from 'sequelize';
import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { TestAssignment } from '../../test-assignment/entities/test-assignment.entity';
import { TestQuestion } from '../../test-question/entities/test-question.entity';

@Table({ tableName: 'test', timestamps: false })
export class Test extends Model {
  @Column({
    field: 'Test_ID',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  testID: number;

  @Column({ field: 'Description', allowNull: false })
  description: string;

  @Column({
    field: 'Created_Date',
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
  })
  createdDate: Date;

  @Column({ field: 'Company_ID', allowNull: false })
  companyID: number;

  @Column({ field: 'Category_ID', allowNull: true })
  categoryID: number;

  @Column({ field: 'active', allowNull: false, defaultValue: true })
  active: boolean;

  @HasMany(() => TestQuestion, { onDelete: 'SET NULL', onUpdate: 'SET NULL' })
  questions: TestQuestion[];

  @HasMany(() => TestAssignment, { onDelete: 'SET NULL', onUpdate: 'SET NULL' })
  assignments: TestAssignment[];
}
