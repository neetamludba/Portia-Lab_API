"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModule = void 0;
const common_1 = require("@nestjs/common");
const test_service_1 = require("./test.service");
const test_controller_1 = require("./test.controller");
const test_providers_1 = require("./entities/test.providers");
const database_module_1 = require("../core/database/database.module");
const test_question_module_1 = require("../test-question/test-question.module");
const test_question_providers_1 = require("../test-question/entities/test-question.providers");
let TestModule = class TestModule {
};
TestModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, test_question_module_1.TestQuestionModule],
        controllers: [test_controller_1.TestController],
        providers: [test_service_1.TestService, ...test_providers_1.testProviders, ...test_question_providers_1.testQuestionProvider],
        exports: [test_service_1.TestService],
    })
], TestModule);
exports.TestModule = TestModule;
//# sourceMappingURL=test.module.js.map