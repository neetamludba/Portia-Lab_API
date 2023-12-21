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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_service_1 = require("../user/user.service");
const mail_service_1 = require("../mail/mail.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService, mailService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async validateUser(email) {
        const user = await this.usersService.findOneActiveByEmail(email);
        if (!user) {
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
    async login(loginUserDto) {
        let user = await this.usersService.findOneActiveByEmail(loginUserDto.email);
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.UNAUTHORIZED);
        }
        const areEqual = await bcrypt.compare(loginUserDto.password, user.password);
        if (!areEqual) {
            throw new common_1.HttpException('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        }
        const userObjForToken = {
            sub: user.userID,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
        };
        const token = this._createToken(userObjForToken);
        const userObject = this._sanitizeUser(user);
        return {
            userObject,
            token,
        };
    }
    async forgetPassword(forgetData) {
        const user = await this.usersService.findOneActiveByEmail(forgetData.email);
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.UNAUTHORIZED);
        }
        const resetToken = this.jwtService.sign({
            id: user.userID,
            email: user.email,
        }, {
            secret: process.env.RESET_JWT_KEY,
        });
        try {
            await this.mailService.sendForgetPasswordEmail(user, process.env.WEBAPP_URL +
                '/' +
                process.env.FORGET_PASSWORD_ENDPOINT +
                '?token=' +
                resetToken);
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('ERROR_SENDING_EMAIL', common_1.HttpStatus.BAD_REQUEST);
        }
        return user;
    }
    async resetPassword(resetData) {
        console.log({ resetData });
        const tokenPayload = this.jwtService.verify(resetData.token, {
            secret: process.env.RESET_JWT_KEY,
        });
        if (tokenPayload && tokenPayload.id) {
            const user = await this.usersService.findOne(tokenPayload.id);
            if (!user) {
                throw new common_1.HttpException('User not found', common_1.HttpStatus.UNAUTHORIZED);
            }
            await this.usersService.updatePassword(user.userID, resetData.password);
            const userObjForToken = {
                sub: user.userID,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
            };
            const token = this._createToken(userObjForToken);
            const userObject = this._sanitizeUser(user);
            return {
                userObject,
                token,
            };
        }
        else
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.BAD_REQUEST);
    }
    _createToken(userData) {
        const nowDate = new Date().getTime();
        const expiryDate = nowDate + Number(process.env.TOKEN_EXPIRY_HRS) * 60 * 60 * 1000;
        const tokenExpiryDate = new Date(expiryDate).toISOString();
        const accessToken = this.jwtService.sign(userData);
        return {
            tokenExpiryDate,
            accessToken,
        };
    }
    _sanitizeUser(user) {
        return {
            userID: user.userID,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            registerationDate: user.registerationDate,
            companyID: user.companyID,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map