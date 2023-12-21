import { MailerService } from '@nestjs-modules/mailer';
import { User } from '../user/entities/user.entity';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserConfirmationEmail(user: User, url: string): Promise<void>;
    sendForgetPasswordEmail(user: User, url: string): Promise<void>;
}
