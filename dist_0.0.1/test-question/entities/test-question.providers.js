"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testQuestionProvider = void 0;
const constants_1 = require("../../core/constants");
const test_question_entity_1 = require("./test-question.entity");
exports.testQuestionProvider = [
    {
        provide: constants_1.TEST_QUESTION_REPOSITORY,
        useValue: test_question_entity_1.TestQuestion,
    },
];
//# sourceMappingURL=test-question.providers.js.map