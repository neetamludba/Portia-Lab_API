"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestQuestionService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../core/constants");
let TestQuestionService = class TestQuestionService {
    constructor(testQuestionRepository) {
        this.testQuestionRepository = testQuestionRepository;
    }
    async create(createTestQuestionDto) {
        return await this.testQuestionRepository.create(createTestQuestionDto);
    }
    async findAll(testID) {
        return await this.testQuestionRepository.findAll({
            where: { testID: testID },
        });
    }
    async findAllActive(testID) {
        return await this.testQuestionRepository.findAll({
            where: { testID: testID, active: true },
        });
    }
    async findOne(id) {
        return await this.testQuestionRepository.findOne({
            where: { questionID: id },
        });
    }
    async update(id, updateTestQuestionDto) {
        return await this.testQuestionRepository.update(updateTestQuestionDto, {
            where: { questionID: id },
        });
    }
    async remove(id) {
        return await this.testQuestionRepository.destroy({
            where: { questionID: id },
        });
    }
};
TestQuestionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.TEST_QUESTION_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], TestQuestionService);
exports.TestQuestionService = TestQuestionService;
//# sourceMappingURL=test-question.service.js.map