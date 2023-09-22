import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { ForgetPasswordDto } from './dto/forget-password.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { ResetPasswordDto } from './dto/reset.password.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() loginData: LoginUserDto) {
    return this.authService.login(loginData);
  }

  @Post('/forgetpassword')
  forgetPassword(@Body() forgetData: ForgetPasswordDto) {
    return this.authService.forgetPassword(forgetData);
  }

  @Post('/resetpassword')
  resetPassword(@Body() resetData: ResetPasswordDto) {
    return this.authService.resetPassword(resetData);
  }
}
