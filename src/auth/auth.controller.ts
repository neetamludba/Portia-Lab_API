import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
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
  @Post('/resetpasswordbyuser')
  resetPassword(@Body() resetData: ResetPasswordDto) {
    return this.authService.resetPasswordByUser(resetData);
  }
}
