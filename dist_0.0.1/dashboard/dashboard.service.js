"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const test_attempt_service_1 = require("../test-attempt/test-attempt.service");
const test_category_service_1 = require("../test-category/test-category.service");
const test_service_1 = require("../test/test.service");
const user_service_1 = require("../user/user.service");
let DashboardService = class DashboardService {
    constructor(testService, testCategoryService, attemptService, userService) {
        this.testService = testService;
        this.testCategoryService = testCategoryService;
        this.attemptService = attemptService;
        this.userService = userService;
    }
    async adminDashboardData() {
        var tests = await this.testService.findAllWithAssignments();
        return await this.categorizedTestData(tests);
    }
    async userDashboardData(userId) {
        var tests = await this.testService.findAllWithAssignmentsForUser(userId);
        return await this.categorizedTestData(tests);
    }
    async categoryWiseUserScoresForAdmin() {
        var tests = await this.testService.findAllWithAssignments();
        return await this.categorizedUserTestScores(tests);
    }
    async categoryWiseUserScoresForUser(userId) {
        var tests = await this.testService.findAllWithAssignmentsForUser(userId);
        return await this.categorizedUserTestScores(tests);
    }
    async categorizedTestData(tests) {
        var categories = await this.testCategoryService.findAll();
        var result = [];
        result.push({
            categoryName: 'None',
            tests: tests.filter((t) => t.categoryID === null),
        });
        categories.forEach((c) => {
            var item = {
                categoryName: c.name,
                tests: tests.filter((t) => t.categoryID === c.categoryID),
            };
            result.push(item);
        });
        return result;
    }
    async categorizedUserTestScores(tests) {
        let data = [];
        let userAttemptScores = [];
        let userAssignmentProgress = [];
        for (let t of tests) {
            const attemptsDTO = await this.attemptService.findAllForTest(t.testID);
            data.push({
                testID: t.testID,
                categoryID: t.categoryID,
                assignmentData: t.assignments,
                attemptsData: attemptsDTO,
            });
        }
        let users = await this.userService.findAll();
        for (let u of users) {
            const userAttempts = data.filter((d) => {
                const userData = d.attemptsData.filter((a) => a.userID === u.userID);
                if (userData && userData.length > 0)
                    return d;
                else
                    return null;
            });
            for (let a of userAttempts) {
                let attemptScore = -1;
                if (a.attemptsData.length > 0) {
                    for (let attempt of a.attemptsData) {
                        const totalQuestions = attempt.result.length;
                        const correctAnswers = attempt.result.filter((r) => r === null || r === void 0 ? void 0 : r.isCorrect);
                        attemptScore = correctAnswers.length / totalQuestions;
                        userAttemptScores.push({
                            testID: a.testID,
                            categoryID: a.categoryID,
                            userID: attempt.userID,
                            score: attemptScore,
                        });
                    }
                }
                else
                    userAttemptScores.push({
                        testID: a.testID,
                        categoryID: a.categoryID,
                        userID: u.userID,
                        score: attemptScore,
                    });
            }
            const userAssignments = data.map((d) => {
                const userData = d.assignmentData.filter((a) => a.assignedToID === u.userID);
                if (userData.length > 0) {
                    let progress = 0;
                    userData.forEach((a) => (progress += a.attempts.length > 0 ? 1 : 0));
                    progress = progress / userData.length;
                    return {
                        testID: d.testID,
                        categoryID: d.categoryID,
                        userID: u.userID,
                        progress: progress,
                    };
                }
                else
                    return {
                        testID: d.testID,
                        categoryID: d.categoryID,
                        userID: u.userID,
                        progress: -1,
                    };
            });
            userAssignmentProgress = userAssignmentProgress.concat(userAssignments);
        }
        console.log({ userAttemptScores }, { userAssignmentProgress });
        var categories = await this.testCategoryService.findAll();
        var result = [];
        result.push({
            categoryName: 'None',
            userWiseProgress: this.userWiseAverageProgressForCategory(null, userAssignmentProgress),
            userWiseScores: this.userWiseAverageScoreForCategory(null, userAttemptScores),
        });
        categories.forEach((c) => {
            var item = {
                categoryName: c.name,
                userWiseProgress: this.userWiseAverageProgressForCategory(c.categoryID, userAssignmentProgress),
                userWiseScores: this.userWiseAverageScoreForCategory(c.categoryID, userAttemptScores),
            };
            result.push(item);
        });
        return result;
    }
    userWiseAverageScoreForCategory(categoryID, scores) {
        const categoryScores = scores.filter((s) => s.categoryID === categoryID);
        if (categoryScores.length === 0)
            return {};
        let userScores = new Object();
        for (let scoreData of categoryScores) {
            if (!userScores[scoreData.userID])
                userScores[scoreData.userID] = [];
            userScores[scoreData.userID].push(scoreData.score);
        }
        let result = new Object();
        for (let userID in userScores) {
            const totalScore = userScores[userID].reduce((partialSum, score) => partialSum + score, 0);
            result[userID] = totalScore / userScores[userID].length;
        }
        return result;
    }
    userWiseAverageProgressForCategory(categoryID, userProgress) {
        const categoryProgress = userProgress.filter((p) => p.categoryID === categoryID);
        let result = new Object();
        for (let cp of categoryProgress) {
            if (cp.progress !== -1) {
                result[cp.userID] = result[cp.userID] || 0;
                result[cp.userID] = result[cp.userID] + cp.progress;
            }
        }
        for (let userID in result) {
            result[userID] =
                result[userID] /
                    categoryProgress.filter((cp1) => cp1.userID == userID && cp1.progress !== -1).length;
        }
        return result;
    }
};
DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [test_service_1.TestService,
        test_category_service_1.TestCategoryService,
        test_attempt_service_1.TestAttemptService,
        user_service_1.UserService])
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map