import { Sequelize } from 'sequelize';
import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { TestAttempt } from '../../test-attempt/entities/test-attempt.entity';

@Table({ tableName: 'Test_Answer', timestamps: false })
export class TestAnswer extends Model {
  @Column({
    field: 'Answer_ID',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  answerID: number;

  @ForeignKey(() => TestAttempt)
  @Column({ field: 'Attempt_ID', allowNull: false })
  attemptID: number;

  @Column({ field: 'Question_ID', allowNull: false })
  questionID: number;

  @Column({ field: 'Skipped', allowNull: false, defaultValue: false })
  skipped: boolean;

  @Column({ field: 'Answer', allowNull: false })
  answer: string;

  @Column({
    field: 'Created_Date',
    allowNull: false,
    defaultValue: Sequelize.fn('now'),
  })
  createdDate: Date;
}
