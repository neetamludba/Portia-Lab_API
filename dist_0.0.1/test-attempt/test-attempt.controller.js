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
exports.TestAttemptController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const test_attempt_service_1 = require("./test-attempt.service");
const create_test_attempt_dto_1 = require("./dto/create-test-attempt.dto");
let TestAttemptController = class TestAttemptController {
    constructor(testAttemptService) {
        this.testAttemptService = testAttemptService;
    }
    create(createTestAttemptDto) {
        return this.testAttemptService.create(createTestAttemptDto);
    }
    findOne(id) {
        return this.testAttemptService.findOne(+id);
    }
    findOneForAssignment(id) {
        return this.testAttemptService.findOneForAssignment(+id);
    }
    findAllForTest(id) {
        return this.testAttemptService.findAllForTest(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_test_attempt_dto_1.CreateTestAttemptDto]),
    __metadata("design:returntype", void 0)
], TestAttemptController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestAttemptController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/forassignment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestAttemptController.prototype, "findOneForAssignment", null);
__decorate([
    (0, common_1.Get)('/fortest/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestAttemptController.prototype, "findAllForTest", null);
TestAttemptController = __decorate([
    (0, swagger_1.ApiTags)('test-attempt'),
    (0, common_1.Controller)('test-attempt'),
    __metadata("design:paramtypes", [test_attempt_service_1.TestAttemptService])
], TestAttemptController);
exports.TestAttemptController = TestAttemptController;
//# sourceMappingURL=test-attempt.controller.js.map