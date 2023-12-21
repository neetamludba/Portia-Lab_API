"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testAttemptProviders = void 0;
const test_attempt_entity_1 = require("./test-attempt.entity");
const constants_1 = require("../../core/constants");
exports.testAttemptProviders = [
    {
        provide: constants_1.TEST_ATTEMPT_REPOSITORY,
        useValue: test_attempt_entity_1.TestAttempt,
    },
];
//# sourceMappingURL=test-attempt.providers.js.map