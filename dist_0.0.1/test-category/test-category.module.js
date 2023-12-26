"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const test_category_service_1 = require("./test-category.service");
const test_category_controller_1 = require("./test-category.controller");
const test_category_providers_1 = require("./entities/test-category.providers");
let TestCategoryModule = class TestCategoryModule {
};
TestCategoryModule = __decorate([
    (0, common_1.Module)({
        controllers: [test_category_controller_1.TestCategoryController],
        providers: [test_category_service_1.TestCategoryService, ...test_category_providers_1.testCategoryProviders],
        exports: [test_category_service_1.TestCategoryService],
    })
], TestCategoryModule);
exports.TestCategoryModule = TestCategoryModule;
//# sourceMappingURL=test-category.module.js.map