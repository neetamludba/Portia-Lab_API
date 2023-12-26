"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestAttemptModule = void 0;
const common_1 = require("@nestjs/common");
const test_attempt_service_1 = require("./test-attempt.service");
const test_attempt_controller_1 = require("./test-attempt.controller");
const test_attempt_providers_1 = require("./entities/test-attempt.providers");
const test_providers_1 = require("../test/entities/test.providers");
const user_providers_1 = require("../user/entities/user.providers");
const test_question_providers_1 = require("../test-question/entities/test-question.providers");
let TestAttemptModule = class TestAttemptModule {
};
TestAttemptModule = __decorate([
    (0, common_1.Module)({
        controllers: [test_attempt_controller_1.TestAttemptController],
        providers: [
            test_attempt_service_1.TestAttemptService,
            ...test_attempt_providers_1.testAttemptProviders,
            ...test_providers_1.testProviders,
            ...user_providers_1.userProviders,
            ...test_question_providers_1.testQuestionProvider,
        ],
        exports: [test_attempt_service_1.TestAttemptService],
    })
], TestAttemptModule);
exports.TestAttemptModule = TestAttemptModule;
//# sourceMappingURL=test-attempt.module.js.map