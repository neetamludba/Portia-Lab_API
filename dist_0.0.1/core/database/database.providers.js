"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const test_assignment_entity_1 = require("../../test-assignment/entities/test-assignment.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const test_category_entity_1 = require("../../test-category/entities/test-category.entity");
const test_question_entity_1 = require("../../test-question/entities/test-question.entity");
const test_entity_1 = require("../../test/entities/test.entity");
const constants_1 = require("../constants");
const database_config_1 = require("./database.config");
const test_attempt_entity_1 = require("../../test-attempt/entities/test-attempt.entity");
const test_answer_entity_1 = require("../../test-answer/entities/test-answer.entity");
exports.databaseProviders = [
    {
        provide: constants_1.SEQUELIZE,
        useFactory: async () => {
            let config;
            switch (process.env.NODE_ENV) {
                case constants_1.DEVELOPMENT:
                    config = database_config_1.databaseConfig.development;
                    break;
                case constants_1.TEST:
                    config = database_config_1.databaseConfig.test;
                    break;
                case constants_1.PRODUCTION:
                    config = database_config_1.databaseConfig.production;
                    break;
                default:
                    config = database_config_1.databaseConfig.development;
            }
            const sequelize = new sequelize_typescript_1.Sequelize(config);
            sequelize.addModels([
                test_category_entity_1.TestCategory,
                test_entity_1.Test,
                test_question_entity_1.TestQuestion,
                test_assignment_entity_1.TestAssignment,
                user_entity_1.User,
                test_attempt_entity_1.TestAttempt,
                test_answer_entity_1.TestAnswer,
            ]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map