import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userProviders } from './entities/user.providers';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_KEY || "WHAT_IS_A_BOOTCAMP",
      signOptions: {
        expiresIn: process.env.TOKEN_EXPIRY_HRS + 'h',
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
  exports: [UserService],
})
export class UserModule {}
