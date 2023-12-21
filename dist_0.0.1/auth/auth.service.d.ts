import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginUserDto } from './dto/login-user.dto';
import { User } from '../user/entities/user.entity';
import { ForgetPasswordDto } from './dto/forget-password.dto';
import { MailService } from '../mail/mail.service';
import { ResetPasswordDto } from './dto/reset.password.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly mailService;
    constructor(usersService: UserService, jwtService: JwtService, mailService: MailService);
    validateUser(email: string): Promise<User>;
    login(loginUserDto: LoginUserDto): Promise<{
        userObject: {
            userID: number;
            firstName: string;
            lastName: string;
            email: string;
            registerationDate: Date;
            companyID: number;
        };
        token: {
            tokenExpiryDate: string;
            accessToken: string;
        };
    }>;
    forgetPassword(forgetData: ForgetPasswordDto): Promise<User>;
    resetPassword(resetData: ResetPasswordDto): Promise<{
        userObject: {
            userID: number;
            firstName: string;
            lastName: string;
            email: string;
            registerationDate: Date;
            companyID: number;
        };
        token: {
            tokenExpiryDate: string;
            accessToken: string;
        };
    }>;
    private _createToken;
    private _sanitizeUser;
}
