"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestQuestionModule = void 0;
const common_1 = require("@nestjs/common");
const test_question_service_1 = require("./test-question.service");
const test_question_controller_1 = require("./test-question.controller");
const test_question_providers_1 = require("./entities/test-question.providers");
let TestQuestionModule = class TestQuestionModule {
};
TestQuestionModule = __decorate([
    (0, common_1.Module)({
        controllers: [test_question_controller_1.TestQuestionController],
        providers: [test_question_service_1.TestQuestionService, ...test_question_providers_1.testQuestionProvider],
    })
], TestQuestionModule);
exports.TestQuestionModule = TestQuestionModule;
//# sourceMappingURL=test-question.module.js.map