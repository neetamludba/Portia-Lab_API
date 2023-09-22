import { TEST_QUESTION_REPOSITORY } from '../../core/constants';
import { TestQuestion } from './test-question.entity';

export const testQuestionProvider = [
  {
    provide: TEST_QUESTION_REPOSITORY,
    useValue: TestQuestion,
  },
];
