import { Test } from '../../test/entities/test.entity';
import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';

@Table({ tableName: 'test_question', timestamps: false })
export class TestQuestion extends Model {
  @Column({
    field: 'Question_ID',
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  questionID: number;

  @ForeignKey(() => Test)
  @Column({ field: 'Test_ID', allowNull: false })
  testID: number;

  @Column({ field: 'Question', allowNull: false })
  question: string;

  @Column({ field: 'Question_Type', allowNull: false })
  questionType: number;

  @Column({ field: 'Display_Order', allowNull: false })
  displayOrder: number;

  @Column({ field: 'Mandatory', allowNull: false, defaultValue: true })
  mandatory: boolean;

  @Column({ field: 'Options', allowNull: false })
  options: string;

  @Column({ field: 'Correct_Answers', allowNull: false })
  correctAnswers: string;

  @Column({ field: 'active', allowNull: false, defaultValue: true })
  active: boolean;
}
