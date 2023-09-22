import { Sequelize } from 'sequelize';
import {
  Table,
  Column,
  Model,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import { TestAssignment } from '../../test-assignment/entities/test-assignment.entity';
import { TestAnswer } from '../../test-answer/entities/test-answer.entity';

@Table({ tableName: 'Test_Attempt', timestamps: false })
export class TestAttempt extends Model {
  @Column({
    field: 'Attempt_ID',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  attemptID: number;

  @Column({ field: 'Test_ID', allowNull: false })
  testID: number;

  @Column({ field: 'User_ID', allowNull: false })
  userID: number;

  @ForeignKey(() => TestAssignment)
  @Column({ field: 'Test_Assignment_ID', allowNull: false })
  testAssignmentID: number;

  @Column({
    field: 'Created_Date',
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
  })
  createdDate: Date;

  @HasMany(() => TestAnswer, { onDelete: 'SET NULL', onUpdate: 'SET NULL' })
  answers: TestAnswer[];
}
