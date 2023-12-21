"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testAssignmentProviders = void 0;
const test_assignment_entity_1 = require("./test-assignment.entity");
const constants_1 = require("../../core/constants");
exports.testAssignmentProviders = [
    {
        provide: constants_1.TEST_ASSIGNMENT_REPOSITORY,
        useValue: test_assignment_entity_1.TestAssignment,
    },
];
//# sourceMappingURL=test-assignment.providers.js.map