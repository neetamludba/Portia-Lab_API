import { Injectable } from '@nestjs/common';
import { TestAssignment } from '../test-assignment/entities/test-assignment.entity';
import { TestAttemptService } from '../test-attempt/test-attempt.service';
import { TestCategoryService } from '../test-category/test-category.service';
import { Test } from '../test/entities/test.entity';
import { TestService } from '../test/test.service';
import { UserService } from '../user/user.service';

@Injectable()
export class DashboardService {
  constructor(
    private readonly testService: TestService,
    private readonly testCategoryService: TestCategoryService,
    private readonly attemptService: TestAttemptService,
    private readonly userService: UserService,
  ) { }

  async adminDashboardData() {
    var tests = await this.testService.findAllWithAssignments();
    return await this.categorizedTestData(tests);
  }

  async userDashboardData(userId: number) {
    var tests = await this.testService.findAllWithAssignmentsForUser(userId);
    return await this.categorizedTestData(tests);
  }

  async categoryWiseUserScoresForAdmin() {
    var tests = await this.testService.findAllWithAssignments();
    return await this.categorizedUserTestScores(tests);
  }

  async categoryWiseUserScoresForUser(userId: number) {
    var tests = await this.testService.findAllWithAssignmentsForUser(userId);
    return await this.categorizedUserTestScores(tests);
  }
  async testWiseUserScoresForAdmin() {
    var tests = await this.testService.findAllWithAssignments();
    return await this.UserTestScores(tests);
  }

  async testWiseUserScoresForUser(userId: number) {
    var tests = await this.testService.findAllWithAssignmentsForUser(userId);
    return await this.UserTestScores(tests);
  }

  private async UserTestScores(tests: Test[]) {
    let data = [];
    let userAttemptScores = [];

    for (let t of tests) {
      const attemptsDTO = await this.attemptService.findAllForTest(t.testID);

      data.push({
        testID: t.testID,
        categoryID: t.categoryID,
        assignmentData: t.assignments,
        attemptsData: attemptsDTO,
      });
    }

    //console.log({ data });

    let users = await this.userService.findAll();
    for (let u of users) {
      const userAttempts = data.filter((d) => {
        const userData = d.attemptsData.filter(
          (a: any) => a.userID === u.userID,
        );

        if (userData && userData.length > 0) return d;
        else return null;
      });

      for (let a of userAttempts) {
        let attemptScore = -1;
        if (a.attemptsData.length > 0) {
          for (let attempt of a.attemptsData) {
            const totalQuestions = attempt.result.length;
            const correctAnswers = attempt.result.filter(
              (r: any) => r?.isCorrect,
            );
            attemptScore = correctAnswers.length / totalQuestions;

            userAttemptScores.push({
              testID: a.testID,
              categoryID: a.categoryID,
              userID: attempt.userID,
              score: attemptScore,
            });
          }
        } else
          userAttemptScores.push({
            testID: a.testID,
            categoryID: a.categoryID,
            userID: u.userID,
            score: attemptScore,
          });
      }

    }

    // console.log({ userAttemptScores });

    var tests = await this.testService.findAll();
    var result = [];



    tests.forEach((t) => {
      var item = {
        testName: t.description,
        userWiseScores: this.userWiseLatestScoresForTest(
          t.testID,
          userAttemptScores,
        ),
      };

      result.push(item);
    });

    return result;
  }

  private userWiseLatestScoresForTest(testID: number, scores: any[]) {
    const testScores = scores.filter((s) => s.testID === testID);
    if (testScores.length === 0) return {};

    let userScores = {};

    for (let scoreData of testScores) {
      if (!userScores[scoreData.userID]) {
        userScores[scoreData.userID] = {
          latestScore: -1, // Initialize with a negative score
        };
      }
      // Check if the current score is newer than the stored latest score
      if (scoreData.score > userScores[scoreData.userID].latestScore) {
        userScores[scoreData.userID].latestScore = scoreData.score;
      }
    }
    let result = {};

    for (let userID in userScores) {
      result[userID] = userScores[userID].latestScore;
    }

    return result;
  }

  private async categorizedTestData(tests: Test[]) {
    var categories = await this.testCategoryService.findAll();
    var result = [];

    // result.push({
    //   categoryName: 'None',
    //   tests: tests.filter((t) => t.categoryID === null),
    // });

    categories.forEach((c) => {
      var item = {
        categoryName: c.name,
        tests: tests.filter((t) => t.categoryID === c.categoryID),
      };

      result.push(item);
    });

    return result;
  }

  private async categorizedUserTestScores(tests: Test[]) {
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

    //console.log({ data });

    let users = await this.userService.findAll();
    for (let u of users) {
      const userAttempts = data.filter((d) => {
        const userData = d.attemptsData.filter(
          (a: any) => a.userID === u.userID,
        );

        if (userData && userData.length > 0) return d;
        else return null;
      });

      for (let a of userAttempts) {
        let attemptScore = -1;
        if (a.attemptsData.length > 0) {
          for (let attempt of a.attemptsData) {
            const totalQuestions = attempt.result.length;
            const correctAnswers = attempt.result.filter(
              (r: any) => r?.isCorrect,
            );
            attemptScore = correctAnswers.length / totalQuestions;

            userAttemptScores.push({
              testID: a.testID,
              categoryID: a.categoryID,
              userID: attempt.userID,
              score: attemptScore,
            });
          }
        } else
          userAttemptScores.push({
            testID: a.testID,
            categoryID: a.categoryID,
            userID: u.userID,
            score: attemptScore,
          });
      }

      const userAssignments = data.map((d) => {
        const userData = d.assignmentData.filter(
          (a: any) => a.assignedToID === u.userID,
        );

        if (userData.length > 0) {
          let progress = 0;

          userData.forEach(
            (a: TestAssignment) => (progress += a.attempts.length > 0 ? 1 : 0),
          );

          progress = progress / userData.length;

          return {
            testID: d.testID,
            categoryID: d.categoryID,
            userID: u.userID,
            progress: progress,
          };
        } else
          return {
            testID: d.testID,
            categoryID: d.categoryID,
            userID: u.userID,
            progress: -1,
          };
      });

      userAssignmentProgress = userAssignmentProgress.concat(userAssignments);
    }

    // console.log({ userAttemptScores }, { userAssignmentProgress });

    var categories = await this.testCategoryService.findAll();
    var result = [];

    // result.push({
    //   categoryName: 'None',
    //   userWiseProgress: this.userWiseAverageProgressForCategory(
    //     null,
    //     userAssignmentProgress,
    //   ),
    //   userWiseScores: this.userWiseAverageScoreForCategory(
    //     null,
    //     userAttemptScores,
    //   ),
    // });

    categories.forEach((c) => {
      var item = {
        categoryName: c.name,
        userWiseProgress: this.userWiseAverageProgressForCategory(
          c.categoryID,
          userAssignmentProgress,
        ),
        userWiseScores: this.userWiseAverageScoreForCategory(
          c.categoryID,
          userAttemptScores,
        ),
      };

      result.push(item);
    });

    return result;
  }

  private userWiseAverageScoreForCategory(categoryID: number, scores: any[]) {
    const categoryScores = scores.filter((s) => s.categoryID === categoryID);

    if (categoryScores.length === 0) return {};

    let userScores = new Object();

    for (let scoreData of categoryScores) {
      if (!userScores[scoreData.userID]) userScores[scoreData.userID] = [];
      userScores[scoreData.userID].push(scoreData.score);
    }

    let result = new Object();

    for (let userID in userScores) {
      const totalScore = userScores[userID].reduce(
        (partialSum: number, score: number) => partialSum + score,
        0,
      );

      result[userID] = totalScore / userScores[userID].length;
    }

    return result;
  }

  private userWiseAverageProgressForCategory(
    categoryID: number,
    userProgress: any[],
  ) {
    const categoryProgress = userProgress.filter(
      (p) => p.categoryID === categoryID,
    );

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
        categoryProgress.filter(
          (cp1) => cp1.userID == userID && cp1.progress !== -1,
        ).length;
    }

    return result;
  }
}
