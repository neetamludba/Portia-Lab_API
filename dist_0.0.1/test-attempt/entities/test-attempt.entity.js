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
exports.TestAttempt = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const test_assignment_entity_1 = require("../../test-assignment/entities/test-assignment.entity");
const test_answer_entity_1 = require("../../test-answer/entities/test-answer.entity");
let TestAttempt = class TestAttempt extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'Attempt_ID',
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], TestAttempt.prototype, "attemptID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Test_ID', allowNull: false }),
    __metadata("design:type", Number)
], TestAttempt.prototype, "testID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'User_ID', allowNull: false }),
    __metadata("design:type", Number)
], TestAttempt.prototype, "userID", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => test_assignment_entity_1.TestAssignment),
    (0, sequelize_typescript_1.Column)({ field: 'Test_Assignment_ID', allowNull: false }),
    __metadata("design:type", Number)
], TestAttempt.prototype, "testAssignmentID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'Created_Date',
        allowNull: false,
        defaultValue: sequelize_1.Sequelize.fn('now'),
    }),
    __metadata("design:type", Date)
], TestAttempt.prototype, "createdDate", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => test_answer_entity_1.TestAnswer, { onDelete: 'SET NULL', onUpdate: 'SET NULL' }),
    __metadata("design:type", Array)
], TestAttempt.prototype, "answers", void 0);
TestAttempt = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Test_Attempt', timestamps: false })
], TestAttempt);
exports.TestAttempt = TestAttempt;
//# sourceMappingURL=test-attempt.entity.js.map