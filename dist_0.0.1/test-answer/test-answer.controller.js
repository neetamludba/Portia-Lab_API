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
exports.TestAnswerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const test_answer_service_1 = require("./test-answer.service");
const create_test_answer_dto_1 = require("./dto/create-test-answer.dto");
const update_test_answer_dto_1 = require("./dto/update-test-answer.dto");
let TestAnswerController = class TestAnswerController {
    constructor(testAnswerService) {
        this.testAnswerService = testAnswerService;
    }
    create(createTestAnswerDto) {
        return this.testAnswerService.create(createTestAnswerDto);
    }
    findAll() {
        return this.testAnswerService.findAll();
    }
    findOne(id) {
        return this.testAnswerService.findOne(+id);
    }
    update(id, updateTestAnswerDto) {
        return this.testAnswerService.update(+id, updateTestAnswerDto);
    }
    remove(id) {
        return this.testAnswerService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_test_answer_dto_1.CreateTestAnswerDto]),
    __metadata("design:returntype", void 0)
], TestAnswerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestAnswerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestAnswerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_test_answer_dto_1.UpdateTestAnswerDto]),
    __metadata("design:returntype", void 0)
], TestAnswerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestAnswerController.prototype, "remove", null);
TestAnswerController = __decorate([
    (0, swagger_1.ApiTags)('test-answer'),
    (0, common_1.Controller)('test-answer'),
    __metadata("design:paramtypes", [test_answer_service_1.TestAnswerService])
], TestAnswerController);
exports.TestAnswerController = TestAnswerController;
//# sourceMappingURL=test-answer.controller.js.map