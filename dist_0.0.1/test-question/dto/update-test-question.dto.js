"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTestQuestionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_test_question_dto_1 = require("./create-test-question.dto");
class UpdateTestQuestionDto extends (0, swagger_1.PartialType)(create_test_question_dto_1.CreateTestQuestionDto) {
}
exports.UpdateTestQuestionDto = UpdateTestQuestionDto;
//# sourceMappingURL=update-test-question.dto.js.map