import { TestAttempt } from './test-attempt.entity';
import { TEST_ATTEMPT_REPOSITORY } from '../../core/constants';

export const testAttemptProviders = [
  {
    provide: TEST_ATTEMPT_REPOSITORY,
    useValue: TestAttempt,
  },
];
