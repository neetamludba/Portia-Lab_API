"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTestCategoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_test_category_dto_1 = require("./create-test-category.dto");
class UpdateTestCategoryDto extends (0, swagger_1.PartialType)(create_test_category_dto_1.CreateTestCategoryDto) {
}
exports.UpdateTestCategoryDto = UpdateTestCategoryDto;
//# sourceMappingURL=update-test-category.dto.js.map