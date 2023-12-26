"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestAnswerModule = void 0;
const common_1 = require("@nestjs/common");
const test_answer_service_1 = require("./test-answer.service");
const test_answer_controller_1 = require("./test-answer.controller");
let TestAnswerModule = class TestAnswerModule {
};
TestAnswerModule = __decorate([
    (0, common_1.Module)({
        controllers: [test_answer_controller_1.TestAnswerController],
        providers: [test_answer_service_1.TestAnswerService]
    })
], TestAnswerModule);
exports.TestAnswerModule = TestAnswerModule;
//# sourceMappingURL=test-answer.module.js.map