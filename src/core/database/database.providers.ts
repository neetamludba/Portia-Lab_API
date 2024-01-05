import { Sequelize } from 'sequelize-typescript';
import { TestAssignment } from '../../test-assignment/entities/test-assignment.entity';
import { User } from '../../user/entities/user.entity';
import { TestCategory } from '../../test-category/entities/test-category.entity';
import { TestQuestion } from '../../test-question/entities/test-question.entity';
import { Test } from '../../test/entities/test.entity';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { TestAttempt } from '../../test-attempt/entities/test-attempt.entity';
import { TestAnswer } from '../../test-answer/entities/test-answer.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }

      console.log(config);
      const sequelize = new Sequelize(config);

      sequelize.addModels([
        TestCategory,
        Test,
        TestQuestion,
        TestAssignment,
        User,
        TestAttempt,
        TestAnswer,
      ]);

      await sequelize.sync();
      return sequelize;
    },
  },
];
