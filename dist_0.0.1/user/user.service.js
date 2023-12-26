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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const constants_1 = require("../core/constants");
const mail_service_1 = require("../mail/mail.service");
const jwt_1 = require("@nestjs/jwt");
let UserService = class UserService {
    constructor(userRepository, jwtService, mailService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async create(createUserDto) {
        const user = await this.userRepository.findOne({
            where: { email: createUserDto.email },
        });
        if (user)
            throw new common_1.HttpException('USER_ALREADY_EXISTS', common_1.HttpStatus.CONFLICT);
        const tempPassword = await this.hash('I AM A NEW USER');
        const newUser = await this.userRepository.create(Object.assign(Object.assign({}, createUserDto), { password: tempPassword }));
        console.log({ newUser });
        const confirmToken = this.jwtService.sign({
            id: newUser.userID,
            email: newUser.email,
        }, {
            secret: process.env.RESET_JWT_KEY,
        });
        try {
            await this.mailService.sendUserConfirmationEmail(newUser, process.env.WEBAPP_URL +
                '/' +
                process.env.CONFIRM_ACCT_ENDPOINT +
                '?token=' +
                confirmToken);
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('ERROR_SENDING_EMAIL', common_1.HttpStatus.BAD_REQUEST);
        }
        return newUser;
    }
    async findAll() {
        return await this.userRepository.findAll();
    }
    async findAllActive() {
        return await this.userRepository.findAll({
            where: { active: true },
        });
    }
    async findOne(id) {
        return await this.userRepository.findOne({
            where: { userID: id },
        });
    }
    async findOneByEmail(email) {
        return await this.userRepository.findOne({ where: { email: email } });
    }
    async findOneActiveByEmail(email) {
        return await this.userRepository.findOne({
            where: { email: email, active: true },
        });
    }
    async update(id, updateUserDto) {
        return await this.userRepository.update(updateUserDto, {
            where: { userID: id },
        });
    }
    async updatePassword(id, newPassword) {
        const encryptedPassword = await this.hash(newPassword);
        return await this.userRepository.update({ password: encryptedPassword }, {
            where: { userID: id },
        });
    }
    async remove(id) {
        return await this.userRepository.destroy({
            where: { userID: id },
        });
    }
    async hash(password) {
        return await bcrypt.hash(password, constants_1.SALT_OR_ROUNDS);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.USER_REPOSITORY)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        mail_service_1.MailService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map