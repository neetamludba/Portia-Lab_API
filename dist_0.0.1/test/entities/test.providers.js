"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testProviders = void 0;
const constants_1 = require("../../core/constants");
const test_entity_1 = require("./test.entity");
exports.testProviders = [
    {
        provide: constants_1.TEST_REPOSITORY,
        useValue: test_entity_1.Test,
    },
];
//# sourceMappingURL=test.providers.js.map