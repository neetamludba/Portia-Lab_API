"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProviders = void 0;
const user_entity_1 = require("./user.entity");
const constants_1 = require("../../core/constants");
exports.userProviders = [
    {
        provide: constants_1.USER_REPOSITORY,
        useValue: user_entity_1.User,
    },
];
//# sourceMappingURL=user.providers.js.map