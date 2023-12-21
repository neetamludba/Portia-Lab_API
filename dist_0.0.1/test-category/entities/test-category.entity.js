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
exports.TestCategory = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
let TestCategory = class TestCategory extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'Category_ID',
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], TestCategory.prototype, "categoryID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Name', allowNull: false }),
    __metadata("design:type", String)
], TestCategory.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ field: 'Company_ID', allowNull: false }),
    __metadata("design:type", Number)
], TestCategory.prototype, "companyID", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ allowNull: false, defaultValue: true }),
    __metadata("design:type", Boolean)
], TestCategory.prototype, "Active", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'Created_Date',
        allowNull: false,
        defaultValue: sequelize_1.Sequelize.fn('now'),
    }),
    __metadata("design:type", Date)
], TestCategory.prototype, "createdDate", void 0);
TestCategory = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'Test_Category', timestamps: false })
], TestCategory);
exports.TestCategory = TestCategory;
//# sourceMappingURL=test-category.entity.js.map