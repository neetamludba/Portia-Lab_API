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
exports.TestAssignmentService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../core/constants");
let TestAssignmentService = class TestAssignmentService {
    constructor(testAssignmentRepository, userRepository, testRepository, testAttemptRepositry) {
        this.testAssignmentRepository = testAssignmentRepository;
        this.userRepository = userRepository;
        this.testRepository = testRepository;
        this.testAttemptRepositry = testAttemptRepositry;
    }
    async create(createTestAssignmentDto) {
        return await this.testAssignmentRepository.create(createTestAssignmentDto);
    }
    async findAll() {
        return await this.testAssignmentRepository.findAll();
    }
    async findOne(id) {
        return await this.testAssignmentRepository.findOne({
            where: { testAssignmentID: id },
        });
    }
    async findAllForTest(id) {
        let assignments = await this.testAssignmentRepository.findAll({
            where: { testID: id },
        });
        let dto = assignments.map(async (x) => {
            let toUser = await this.userRepository.findOne({
                where: { userID: x.assignedToID },
            });
            let byUser = await this.userRepository.findOne({
                where: { userID: x.assignedByID },
            });
            return {
                testAssignmentID: x.testAssignmentID,
                assignedToID: x.assignedToID,
                assignedByID: x.assignedByID,
                assignedToName: toUser.firstName + ' ' + toUser.lastName,
                assignedByName: byUser.firstName + ' ' + byUser.lastName,
                assignedDate: x.assignedDate,
            };
        });
        return Promise.all(dto);
    }
    async findAllForUser(id) {
        let assignments = await this.testAssignmentRepository.findAll({
            where: { assignedToID: id },
        });
        let dto = assignments.map(async (x) => {
            let toUser = await this.userRepository.findOne({
                where: { userID: x.assignedToID },
            });
            let byUser = await this.userRepository.findOne({
                where: { userID: x.assignedByID },
            });
            let test = await this.testRepository.findOne({
                where: { testID: x.testID },
            });
            let assignment = await this.testAttemptRepositry.findOne({
                where: { testAssignmentID: x.testAssignmentID },
            });
            return {
                testAssignmentID: x.testAssignmentID,
                testID: x.testID,
                testDescription: test.description,
                assignedToID: x.assignedToID,
                assignedByID: x.assignedByID,
                assignedToName: toUser.firstName + ' ' + toUser.lastName,
                assignedByName: byUser.firstName + ' ' + byUser.lastName,
                assignedDate: x.assignedDate,
                attempted: assignment !== null,
            };
        });
        return Promise.all(dto);
    }
    async remove(id) {
        return await this.testAssignmentRepository.destroy({
            where: { testAssignmentID: id },
        });
    }
};
TestAssignmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.TEST_ASSIGNMENT_REPOSITORY)),
    __param(1, (0, common_1.Inject)(constants_1.USER_REPOSITORY)),
    __param(2, (0, common_1.Inject)(constants_1.TEST_REPOSITORY)),
    __param(3, (0, common_1.Inject)(constants_1.TEST_ATTEMPT_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], TestAssignmentService);
exports.TestAssignmentService = TestAssignmentService;
//# sourceMappingURL=test-assignment.service.js.map