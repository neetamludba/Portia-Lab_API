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
exports.Test = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const test_assignment_entity_1 = require("../../test-assignment/entities/test-assignment.entity");
const test_question_entity_1 = require("../../test-question/entities/test-question.entity");
let Test = class Test extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'Test_ID',
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Test.prototype, "testID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Description', allowNull: false }),
    __metadata("design:type", String)
], Test.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'Created_Date',
        allowNull: false,
        defaultValue: sequelize_1.Sequelize.fn('now'),
    }),
    __metadata("design:type", Date)
], Test.prototype, "createdDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Company_ID', allowNull: false }),
    __metadata("design:type", Number)
], Test.prototype, "companyID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Category_ID', allowNull: true }),
    __metadata("design:type", Number)
], Test.prototype, "categoryID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'active', allowNull: false, defaultValue: true }),
    __metadata("design:type", Boolean)
], Test.prototype, "active", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => test_question_entity_1.TestQuestion, { onDelete: 'SET NULL', onUpdate: 'SET NULL' }),
    __metadata("design:type", Array)
], Test.prototype, "questions", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => test_assignment_entity_1.TestAssignment, { onDelete: 'SET NULL', onUpdate: 'SET NULL' }),
    __metadata("design:type", Array)
], Test.prototype, "assignments", void 0);
Test = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'test', timestamps: false })
], Test);
exports.Test = Test;
//# sourceMappingURL=test.entity.js.map