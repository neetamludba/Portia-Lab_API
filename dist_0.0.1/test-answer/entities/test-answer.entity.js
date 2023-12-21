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
exports.TestAnswer = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const test_attempt_entity_1 = require("../../test-attempt/entities/test-attempt.entity");
let TestAnswer = class TestAnswer extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'Answer_ID',
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], TestAnswer.prototype, "answerID", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => test_attempt_entity_1.TestAttempt),
    (0, sequelize_typescript_1.Column)({ field: 'Attempt_ID', allowNull: false }),
    __metadata("design:type", Number)
], TestAnswer.prototype, "attemptID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Question_ID', allowNull: false }),
    __metadata("design:type", Number)
], TestAnswer.prototype, "questionID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Skipped', allowNull: false, defaultValue: false }),
    __metadata("design:type", Boolean)
], TestAnswer.prototype, "skipped", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Answer', allowNull: false }),
    __metadata("design:type", String)
], TestAnswer.prototype, "answer", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'Created_Date',
        allowNull: false,
        defaultValue: sequelize_1.Sequelize.fn('now'),
    }),
    __metadata("design:type", Date)
], TestAnswer.prototype, "createdDate", void 0);
TestAnswer = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Test_Answer', timestamps: false })
], TestAnswer);
exports.TestAnswer = TestAnswer;
//# sourceMappingURL=test-answer.entity.js.map