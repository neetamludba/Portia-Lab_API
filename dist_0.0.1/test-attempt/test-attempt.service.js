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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestAttemptService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../core/constants");
const test_answer_entity_1 = require("../test-answer/entities/test-answer.entity");
const test_question_entity_1 = require("../test-question/entities/test-question.entity");
let TestAttemptService = class TestAttemptService {
    constructor(testAttemptRepository, userRepository, testRepository, testQuestionRepository) {
        this.testAttemptRepository = testAttemptRepository;
        this.userRepository = userRepository;
        this.testRepository = testRepository;
        this.testQuestionRepository = testQuestionRepository;
    }
    async create(createTestAttemptDto) {
        if (!createTestAttemptDto.answers ||
            createTestAttemptDto.answers.length == 0)
            return Promise.reject(new Error('No answers found in attempt'));
        return await this.testAttemptRepository.create(createTestAttemptDto, {
            include: test_answer_entity_1.TestAnswer,
        });
    }
    async findOne(id) {
        let attempt = await this.testAttemptRepository.findOne({
            where: { attemptID: id },
            include: test_answer_entity_1.TestAnswer,
        });
        return this.getAttemptDTO(attempt);
    }
    async findOneForAssignment(id) {
        let attempt = await this.testAttemptRepository.findOne({
            where: { testAssignmentID: id },
            include: test_answer_entity_1.TestAnswer,
        });
        return this.getAttemptDTO(attempt);
    }
    async findAllForTest(id) {
        let attempts = await this.testAttemptRepository.findAll({
            where: { testID: id },
            include: test_answer_entity_1.TestAnswer,
        });
        return this.getAllAttemptsDTO(attempts);
    }
    async remove(id) {
        return `This action removes a #${id} testAttempt`;
    }
    async getAllAttemptsDTO(attempts) {
        let dto = attempts.map(async (x) => {
            return await this.getAttemptResultDTO(x);
        });
        return Promise.all(dto);
    }
    async getAttemptDTO(attempt) {
        const user = await this.userRepository.findOne({
            where: { userID: attempt.userID },
        });
        const test = await this.testRepository.findOne({
            where: { testID: attempt.testID },
            include: test_question_entity_1.TestQuestion,
        });
        const questionsAnswers = test.questions.map((q) => {
            const ans = attempt.answers.find((a) => a.questionID === q.questionID);
            if (ans)
                return {
                    questionID: q.questionID,
                    question: q.question,
                    questionType: q.questionType,
                    displayOrder: q.displayOrder,
                    mandatory: q.mandatory,
                    options: q.options,
                    correctAnswers: q.correctAnswers,
                    answerID: ans.answerID,
                    answer: ans.answer,
                    skipped: ans.skipped,
                };
            else
                return null;
        });
        return {
            attemptID: attempt.attemptID,
            testID: attempt.testID,
            userID: attempt.userID,
            testAssignmentID: attempt.testAssignmentID,
            userName: user.firstName + ' ' + user.lastName,
            testDescription: test.description,
            createdDate: attempt.createdDate,
            questionsAnswers: questionsAnswers,
        };
    }
    async getAttemptResultDTO(attempt) {
        const user = await this.userRepository.findOne({
            where: { userID: attempt.userID },
        });
        const testQuestions = await this.testQuestionRepository.findAll({
            where: { testID: attempt.testID },
        });
        const questionsResults = testQuestions.map((q) => {
            const ans = attempt.answers.find((a) => a.questionID === q.questionID);
            if (ans) {
                let isCorrect = true;
                if (q.questionType == 1)
                    isCorrect =
                        q.correctAnswers.split(',')[Number(ans.answer)] === 'true';
                else {
                    ans.answer.split(',').forEach((answer) => {
                        if (q.correctAnswers.split(',')[Number(answer)] === 'true')
                            isCorrect = isCorrect;
                        else
                            isCorrect = false;
                    });
                }
                return {
                    questionID: q.questionID,
                    question: q.question,
                    questionType: q.questionType,
                    displayOrder: q.displayOrder,
                    skipped: ans.skipped,
                    isCorrect: isCorrect,
                };
            }
            else
                return null;
        });
        return {
            attemptID: attempt.attemptID,
            createdDate: attempt.createdDate,
            testAssignmentID: attempt.testAssignmentID,
            userID: attempt.userID,
            userName: user.firstName + ' ' + user.lastName,
            result: questionsResults.sort((a, b) => (a === null || a === void 0 ? void 0 : a.displayOrder) - (b === null || b === void 0 ? void 0 : b.displayOrder)),
        };
    }
};
TestAttemptService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.TEST_ATTEMPT_REPOSITORY)),
    __param(1, (0, common_1.Inject)(constants_1.USER_REPOSITORY)),
    __param(2, (0, common_1.Inject)(constants_1.TEST_REPOSITORY)),
    __param(3, (0, common_1.Inject)(constants_1.TEST_QUESTION_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], TestAttemptService);
exports.TestAttemptService = TestAttemptService;
//# sourceMappingURL=test-attempt.service.js.map