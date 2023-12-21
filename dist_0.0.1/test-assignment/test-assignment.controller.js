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
exports.TestAssignmentController = void 0;
const common_1 = require("@nestjs/common");
const test_assignment_service_1 = require("./test-assignment.service");
const create_test_assignment_dto_1 = require("./dto/create-test-assignment.dto");
const swagger_1 = require("@nestjs/swagger");
let TestAssignmentController = class TestAssignmentController {
    constructor(testAssignmentService) {
        this.testAssignmentService = testAssignmentService;
    }
    create(createTestAssignmentDto) {
        return this.testAssignmentService.create(createTestAssignmentDto);
    }
    findAll() {
        return this.testAssignmentService.findAll();
    }
    findOne(id) {
        return this.testAssignmentService.findOne(+id);
    }
    findAllForTest(id) {
        return this.testAssignmentService.findAllForTest(+id);
    }
    findAllForUser(id) {
        return this.testAssignmentService.findAllForUser(+id);
    }
    remove(id) {
        return this.testAssignmentService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_test_assignment_dto_1.CreateTestAssignmentDto]),
    __metadata("design:returntype", void 0)
], TestAssignmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestAssignmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestAssignmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/fortest/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestAssignmentController.prototype, "findAllForTest", null);
__decorate([
    (0, common_1.Get)('/foruser/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestAssignmentController.prototype, "findAllForUser", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestAssignmentController.prototype, "remove", null);
TestAssignmentController = __decorate([
    (0, swagger_1.ApiTags)('test-assignment'),
    (0, common_1.Controller)('test-assignment'),
    __metadata("design:paramtypes", [test_assignment_service_1.TestAssignmentService])
], TestAssignmentController);
exports.TestAssignmentController = TestAssignmentController;
//# sourceMappingURL=test-assignment.controller.js.map