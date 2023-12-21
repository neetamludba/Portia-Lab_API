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
exports.TestAssignment = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const test_attempt_entity_1 = require("../../test-attempt/entities/test-attempt.entity");
const test_entity_1 = require("../../test/entities/test.entity");
let TestAssignment = class TestAssignment extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'Test_Assignment_ID',
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], TestAssignment.prototype, "testAssignmentID", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => test_entity_1.Test),
    (0, sequelize_typescript_1.Column)({ field: 'Test_ID', allowNull: false }),
    __metadata("design:type", Number)
], TestAssignment.prototype, "testID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Assigned_By_ID', allowNull: false }),
    __metadata("design:type", Number)
], TestAssignment.prototype, "assignedByID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Assigned_To_ID', allowNull: false }),
    __metadata("design:type", Number)
], TestAssignment.prototype, "assignedToID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'Assigned_Date',
        allowNull: false,
        defaultValue: sequelize_1.Sequelize.fn('now'),
    }),
    __metadata("design:type", Date)
], TestAssignment.prototype, "assignedDate", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => test_attempt_entity_1.TestAttempt, { onDelete: 'SET NULL', onUpdate: 'SET NULL' }),
    __metadata("design:type", Array)
], TestAssignment.prototype, "attempts", void 0);
TestAssignment = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Test_Assignment', timestamps: false })
], TestAssignment);
exports.TestAssignment = TestAssignment;
//# sourceMappingURL=test-assignment.entity.js.map