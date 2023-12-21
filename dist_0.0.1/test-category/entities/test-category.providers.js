"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCategoryProviders = void 0;
const test_category_entity_1 = require("./test-category.entity");
const constants_1 = require("../../core/constants");
exports.testCategoryProviders = [
    {
        provide: constants_1.TEST_CATEGORY_REPOSITORY,
        useValue: test_category_entity_1.TestCategory,
    },
];
//# sourceMappingURL=test-category.providers.js.map