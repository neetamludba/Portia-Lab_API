import { TestAssignment } from './test-assignment.entity';
import { TEST_ASSIGNMENT_REPOSITORY } from '../../core/constants';

export const testAssignmentProviders = [
  {
    provide: TEST_ASSIGNMENT_REPOSITORY,
    useValue: TestAssignment,
  },
];
