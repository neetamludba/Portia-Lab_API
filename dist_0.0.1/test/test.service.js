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
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const test_assignment_entity_1 = require("../test-assignment/entities/test-assignment.entity");
const test_attempt_entity_1 = require("../test-attempt/entities/test-attempt.entity");
const constants_1 = require("../core/constants");
const test_question_entity_1 = require("../test-question/entities/test-question.entity");
let TestService = class TestService {
    constructor(testsRepository, testQuestionRepository) {
        this.testsRepository = testsRepository;
        this.testQuestionRepository = testQuestionRepository;
    }
    async create(createTestDto) {
        return await this.testsRepository.create(createTestDto, {
            include: test_question_entity_1.TestQuestion,
        });
    }
    async findAll() {
        return this.testsRepository.findAll();
    }
    async findAllWithAssignments() {
        return await this.testsRepository.findAll({
            include: [{ model: test_assignment_entity_1.TestAssignment, include: [test_attempt_entity_1.TestAttempt] }],
        });
    }
    async findAllWithAssignmentsForUser(userId) {
        return await this.testsRepository.findAll({
            include: [
                {
                    model: test_assignment_entity_1.TestAssignment,
                    include: [test_attempt_entity_1.TestAttempt],
                    where: { assignedToID: userId },
                },
            ],
        });
    }
    async findAllActive() {
        return await this.testsRepository.findAll({
            where: { active: true },
        });
    }
    async findOne(id) {
        return await this.testsRepository.findOne({
            where: { testID: id },
            include: test_question_entity_1.TestQuestion,
        });
    }
    async update(id, updateTestDto) {
        return await this.testsRepository
            .update(updateTestDto, {
            where: { testID: id },
        })
            .then(async (updateResponse) => {
            updateTestDto.questions.forEach(async (question) => {
                await this.testQuestionRepository.upsert(question);
            });
            return updateResponse;
        });
    }
    async remove(id) {
        return await this.testsRepository.destroy({
            where: { testID: id },
        });
    }
};
TestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.TEST_REPOSITORY)),
    __param(1, (0, common_1.Inject)(constants_1.TEST_QUESTION_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object])
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map