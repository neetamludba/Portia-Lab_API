import { TestAttemptService } from '../test-attempt/test-attempt.service';
import { TestCategoryService } from '../test-category/test-category.service';
import { TestService } from '../test/test.service';
import { UserService } from '../user/user.service';
export declare class DashboardService {
    private readonly testService;
    private readonly testCategoryService;
    private readonly attemptService;
    private readonly userService;
    constructor(testService: TestService, testCategoryService: TestCategoryService, attemptService: TestAttemptService, userService: UserService);
    adminDashboardData(): Promise<any[]>;
    userDashboardData(userId: number): Promise<any[]>;
    categoryWiseUserScoresForAdmin(): Promise<any[]>;
    categoryWiseUserScoresForUser(userId: number): Promise<any[]>;
    private categorizedTestData;
    private categorizedUserTestScores;
    private userWiseAverageScoreForCategory;
    private userWiseAverageProgressForCategory;
}
