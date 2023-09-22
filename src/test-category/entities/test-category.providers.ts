import { TestCategory } from './test-category.entity';
import { TEST_CATEGORY_REPOSITORY } from '../../core/constants';

export const testCategoryProviders = [
  {
    provide: TEST_CATEGORY_REPOSITORY,
    useValue: TestCategory,
  },
];
