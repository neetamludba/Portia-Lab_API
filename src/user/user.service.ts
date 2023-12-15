import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SALT_OR_ROUNDS, USER_REPOSITORY } from '../core/constants';
import { User } from './entities/user.entity';
import { MailService } from '../mail/mail.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = await this.findOneByEmail(createUserDto.email);

    if (user)
      throw new HttpException('USER_ALREADY_EXISTS', HttpStatus.CONFLICT);

    // const hashPassword = await this.hash(createUserDto.password);
    if (createUserDto.password === undefined) {
      createUserDto.password = createUserDto.strKey;
    }
    createUserDto.password = await this.hash(createUserDto.password);

    const newUser = await this.userRepository.create({
      ...createUserDto,
      // password: hashPassword,
    });

    // console.log({ newUser });

    const confirmToken = this.jwtService.sign(
      {
        id: newUser.userID,
        email: newUser.email,
      },
      {
        secret: process.env.RESET_JWT_KEY,
      },
    );

    //   try {
    //     await this.mailService.sendUserConfirmationEmail(
    //       newUser,
    //       process.env.WEBAPP_URL +
    //         '/' +
    //         process.env.CONFIRM_ACCT_ENDPOINT +
    //         '?token=' +
    //         confirmToken,
    //     );
    //   } catch (error) {
    //     console.log(error);
    //     throw new HttpException('ERROR_SENDING_EMAIL', HttpStatus.BAD_REQUEST);
    //   }

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

  async findAllForAdmin(companyId: number) {
    return await this.userRepository.findAll({
      where: { companyID: companyId, userType: ['Teacher', 'Student', 'Guardian'] },
    });
  }

  async findAllForTeacher(companyId: number) {
    return await this.userRepository.findAll({
      where: { companyID: companyId, userType: ['Student', 'Guardian'] },
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { userID: id },
    });
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async findOneActiveByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email: email, active: true },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    updateUserDto.password = await this.hash(updateUserDto.password);
    return await this.userRepository.update(updateUserDto, {
      where: { userID: id },
    });
  }

  async updatePassword(id: number, newPassword: string) {
    const encryptedPassword = await this.hash(newPassword);

    return await this.userRepository.update(
      { password: encryptedPassword },
      {
        where: { userID: id },
      },
    );
  }

  async remove(id: number) {
    return await this.userRepository.destroy({
      where: { userID: id },
    });
  }

  async hash(password: string) {
    return await bcrypt.hash(password, SALT_OR_ROUNDS);
  }
}
