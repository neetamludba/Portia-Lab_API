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
exports.TestQuestionController = void 0;
const common_1 = require("@nestjs/common");
const test_question_service_1 = require("./test-question.service");
const create_test_question_dto_1 = require("./dto/create-test-question.dto");
const update_test_question_dto_1 = require("./dto/update-test-question.dto");
const swagger_1 = require("@nestjs/swagger");
let TestQuestionController = class TestQuestionController {
    constructor(testQuestionService) {
        this.testQuestionService = testQuestionService;
    }
    create(createTestQuestionDto) {
        return this.testQuestionService.create(createTestQuestionDto);
    }
    findAll(id) {
        return this.testQuestionService.findAll(+id);
    }
    findAllActive(id) {
        return this.testQuestionService.findAllActive(+id);
    }
    findOne(id) {
        return this.testQuestionService.findOne(+id);
    }
    update(id, updateTestQuestionDto) {
        return this.testQuestionService.update(+id, updateTestQuestionDto);
    }
    remove(id) {
        return this.testQuestionService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_test_question_dto_1.CreateTestQuestionDto]),
    __metadata("design:returntype", void 0)
], TestQuestionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':testID'),
    __param(0, (0, common_1.Param)('testID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestQuestionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':testID'),
    __param(0, (0, common_1.Param)('testID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestQuestionController.prototype, "findAllActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestQuestionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_test_question_dto_1.UpdateTestQuestionDto]),
    __metadata("design:returntype", void 0)
], TestQuestionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestQuestionController.prototype, "remove", null);
TestQuestionController = __decorate([
    (0, swagger_1.ApiTags)('test-question'),
    (0, common_1.Controller)('test-question'),
    __metadata("design:paramtypes", [test_question_service_1.TestQuestionService])
], TestQuestionController);
exports.TestQuestionController = TestQuestionController;
//# sourceMappingURL=test-question.controller.js.map