import { TestAnswer } from './test-answer.entity';
import { TEST_ANSWER_REPOSITORY } from '../../core/constants';

export const testAnswerProviders = [
  {
    provide: TEST_ANSWER_REPOSITORY,
    useValue: TestAnswer,
  },
];
