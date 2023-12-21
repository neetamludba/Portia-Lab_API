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
exports.TestCategoryController = void 0;
const common_1 = require("@nestjs/common");
const test_category_service_1 = require("./test-category.service");
const create_test_category_dto_1 = require("./dto/create-test-category.dto");
const update_test_category_dto_1 = require("./dto/update-test-category.dto");
const swagger_1 = require("@nestjs/swagger");
let TestCategoryController = class TestCategoryController {
    constructor(testCategoryService) {
        this.testCategoryService = testCategoryService;
    }
    create(createTestCategoryDto) {
        return this.testCategoryService.create(createTestCategoryDto);
    }
    findAll() {
        return this.testCategoryService.findAll();
    }
    findAllActive() {
        return this.testCategoryService.findAllActive();
    }
    findOne(id) {
        return this.testCategoryService.findOne(+id);
    }
    update(id, updateTestCategoryDto) {
        return this.testCategoryService.update(+id, updateTestCategoryDto);
    }
    remove(id) {
        return this.testCategoryService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_test_category_dto_1.CreateTestCategoryDto]),
    __metadata("design:returntype", void 0)
], TestCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestCategoryController.prototype, "findAllActive", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_test_category_dto_1.UpdateTestCategoryDto]),
    __metadata("design:returntype", void 0)
], TestCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestCategoryController.prototype, "remove", null);
TestCategoryController = __decorate([
    (0, swagger_1.ApiTags)('test-category'),
    (0, common_1.Controller)('test-category'),
    __metadata("design:paramtypes", [test_category_service_1.TestCategoryService])
], TestCategoryController);
exports.TestCategoryController = TestCategoryController;
//# sourceMappingURL=test-category.controller.js.map