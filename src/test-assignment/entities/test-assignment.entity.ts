import { Sequelize } from 'sequelize';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { TestAttempt } from '../../test-attempt/entities/test-attempt.entity';
import { Test } from '../../test/entities/test.entity';

@Table({ tableName: 'Test_Assignment', timestamps: false })
export class TestAssignment extends Model {
  @Column({
    field: 'Test_Assignment_ID',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  testAssignmentID: number;

  @ForeignKey(() => Test)
  @Column({ field: 'Test_ID', allowNull: false })
  testID: number;

  @Column({ field: 'Assigned_By_ID', allowNull: false })
  assignedByID: number;

  @Column({ field: 'Assigned_To_ID', allowNull: false })
  assignedToID: number;

  @Column({
    field: 'Assigned_Date',
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
  })
  assignedDate: Date;

  @HasMany(() => TestAttempt, { onDelete: 'SET NULL', onUpdate: 'SET NULL' })
  attempts: TestAttempt[];
}
