"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testAnswerProviders = void 0;
const test_answer_entity_1 = require("./test-answer.entity");
const constants_1 = require("../../core/constants");
exports.testAnswerProviders = [
    {
        provide: constants_1.TEST_ANSWER_REPOSITORY,
        useValue: test_answer_entity_1.TestAnswer,
    },
];
//# sourceMappingURL=test-answer.providers.js.map