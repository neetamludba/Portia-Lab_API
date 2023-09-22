import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserService } from '../user/user.service';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from '../user/entities/user.entity';
import { ForgetPasswordDto } from './dto/forget-password.dto';
import { MailService } from '../mail/mail.service';
import { ResetPasswordDto } from './dto/reset.password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) {}

  async validateUser(email: string) {
    const user = await this.usersService.findOneActiveByEmail(email);

    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }

    return user;
  }

  async login(loginUserDto: LoginUserDto) {
    let user = await this.usersService.findOneActiveByEmail(loginUserDto.email);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    // compare passwords
    const areEqual = await bcrypt.compare(loginUserDto.password, user.password);

    if (!areEqual) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const userObjForToken = {
      sub: user.userID, // sub is used to be consistent with JWT standards
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

  async forgetPassword(forgetData: ForgetPasswordDto) {
    const user = await this.usersService.findOneActiveByEmail(forgetData.email);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
    }

    const resetToken = this.jwtService.sign(
      {
        id: user.userID,
        email: user.email,
      },
      {
        secret: process.env.RESET_JWT_KEY,
      },
    );

    try {
      await this.mailService.sendForgetPasswordEmail(
        user,
        process.env.WEBAPP_URL +
          '/' +
          process.env.FORGET_PASSWORD_ENDPOINT +
          '?token=' +
          resetToken,
      );
    } catch (error) {
      console.log(error);
      throw new HttpException('ERROR_SENDING_EMAIL', HttpStatus.BAD_REQUEST);
    }

    return user;
  }

  async resetPassword(resetData: ResetPasswordDto) {
    console.log({ resetData });

    const tokenPayload = this.jwtService.verify(resetData.token, {
      secret: process.env.RESET_JWT_KEY,
    });

    if (tokenPayload && tokenPayload.id) {
      const user = await this.usersService.findOne(tokenPayload.id);

      if (!user) {
        throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);
      }

      await this.usersService.updatePassword(user.userID, resetData.password);

      const userObjForToken = {
        sub: user.userID, // sub is used to be consistent with JWT standards
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
    } else throw new HttpException('Invalid token', HttpStatus.BAD_REQUEST);
  }

  private _createToken(userData: any) {
    const nowDate = new Date().getTime();

    const expiryDate =
      nowDate + Number(process.env.TOKEN_EXPIRY_HRS) * 60 * 60 * 1000;

    const tokenExpiryDate = new Date(expiryDate).toISOString();
    const accessToken = this.jwtService.sign(userData);

    return {
      tokenExpiryDate,
      accessToken,
    };
  }

  private _sanitizeUser(user: User) {
    return {
      userID: user.userID,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      registerationDate: user.registerationDate,
      companyID: user.companyID,
    };
  }
}
