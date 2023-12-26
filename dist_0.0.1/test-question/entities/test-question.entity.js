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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestQuestion = void 0;
const test_entity_1 = require("../../test/entities/test.entity");
const sequelize_typescript_1 = require("sequelize-typescript");
let TestQuestion = class TestQuestion extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'Question_ID',
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], TestQuestion.prototype, "questionID", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => test_entity_1.Test),
    (0, sequelize_typescript_1.Column)({ field: 'Test_ID', allowNull: false }),
    __metadata("design:type", Number)
], TestQuestion.prototype, "testID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Question', allowNull: false }),
    __metadata("design:type", String)
], TestQuestion.prototype, "question", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Question_Type', allowNull: false }),
    __metadata("design:type", Number)
], TestQuestion.prototype, "questionType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Display_Order', allowNull: false }),
    __metadata("design:type", Number)
], TestQuestion.prototype, "displayOrder", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Mandatory', allowNull: false, defaultValue: true }),
    __metadata("design:type", Boolean)
], TestQuestion.prototype, "mandatory", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Options', allowNull: false }),
    __metadata("design:type", String)
], TestQuestion.prototype, "options", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Correct_Answers', allowNull: false }),
    __metadata("design:type", String)
], TestQuestion.prototype, "correctAnswers", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'active', allowNull: false, defaultValue: true }),
    __metadata("design:type", Boolean)
], TestQuestion.prototype, "active", void 0);
TestQuestion = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'test_question', timestamps: false })
], TestQuestion);
exports.TestQuestion = TestQuestion;
//# sourceMappingURL=test-question.entity.js.map