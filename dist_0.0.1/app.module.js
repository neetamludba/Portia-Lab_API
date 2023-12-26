"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const database_module_1 = require("./core/database/database.module");
const test_category_module_1 = require("./test-category/test-category.module");
const test_module_1 = require("./test/test.module");
const test_question_module_1 = require("./test-question/test-question.module");
const test_assignment_module_1 = require("./test-assignment/test-assignment.module");
const user_module_1 = require("./user/user.module");
const test_attempt_module_1 = require("./test-attempt/test-attempt.module");
const test_answer_module_1 = require("./test-answer/test-answer.module");
const auth_module_1 = require("./auth/auth.module");
const mail_module_1 = require("./mail/mail.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            database_module_1.DatabaseModule,
            test_category_module_1.TestCategoryModule,
            test_module_1.TestModule,
            test_question_module_1.TestQuestionModule,
            test_assignment_module_1.TestAssignmentModule,
            user_module_1.UserModule,
            test_attempt_module_1.TestAttemptModule,
            test_answer_module_1.TestAnswerModule,
            auth_module_1.AuthModule,
            mail_module_1.MailModule,
            dashboard_module_1.DashboardModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map