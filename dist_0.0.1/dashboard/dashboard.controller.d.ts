import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    adminDashboardData(): Promise<any[]>;
    userDashboardData(id: string): Promise<any[]>;
    categoryWiseScoresForAdmin(): Promise<any[]>;
    categoryWiseUserScoresForUser(id: string): Promise<any[]>;
}
