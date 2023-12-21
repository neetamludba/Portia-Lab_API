"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestAssignmentModule = void 0;
const common_1 = require("@nestjs/common");
const test_assignment_service_1 = require("./test-assignment.service");
const test_assignment_controller_1 = require("./test-assignment.controller");
const test_assignment_providers_1 = require("./entities/test-assignment.providers");
const user_providers_1 = require("../user/entities/user.providers");
const test_providers_1 = require("../test/entities/test.providers");
const test_attempt_providers_1 = require("../test-attempt/entities/test-attempt.providers");
let TestAssignmentModule = class TestAssignmentModule {
};
TestAssignmentModule = __decorate([
    (0, common_1.Module)({
        controllers: [test_assignment_controller_1.TestAssignmentController],
        providers: [
            test_assignment_service_1.TestAssignmentService,
            ...test_assignment_providers_1.testAssignmentProviders,
            ...user_providers_1.userProviders,
            ...test_providers_1.testProviders,
            ...test_attempt_providers_1.testAttemptProviders,
        ],
    })
], TestAssignmentModule);
exports.TestAssignmentModule = TestAssignmentModule;
//# sourceMappingURL=test-assignment.module.js.map