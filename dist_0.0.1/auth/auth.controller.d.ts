import { AuthService } from './auth.service';
import { ForgetPasswordDto } from './dto/forget-password.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ResetPasswordDto } from './dto/reset.password.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginData: LoginUserDto): Promise<{
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
    forgetPassword(forgetData: ForgetPasswordDto): Promise<import("../user/entities/user.entity").User>;
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
}
