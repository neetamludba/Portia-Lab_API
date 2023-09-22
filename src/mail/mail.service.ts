import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '../user/entities/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmationEmail(user: User, url: string) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to bootcamp App! Confirm your Email',
      template: 'confirmation',
      context: {
        name: user.firstName + ' ' + user.lastName,
        url: url,
      },
    });
  }

  async sendForgetPasswordEmail(user: User, url: string) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'bootcamp App! Reset your password',
      template: 'forgetpassword',
      context: {
        name: user.firstName + ' ' + user.lastName,
        url: url,
      },
    });
  }
}
