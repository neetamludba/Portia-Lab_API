import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { createMock } from '@golevelup/ts-jest';

import { AuthController } from '../auth/auth.controller';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { userProviders } from '../user/entities/user.providers';
import { LoginUserDto } from '../auth/dto/login-user.dto';
import { UserController } from './user.controller';
import { AuthService } from '../auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ResetPasswordDto } from '../auth/dto/reset.password.dto';
import { MailService } from '../mail/mail.service';

describe('User E2E TEST', () => {
  let userController: UserController;
  let authController: AuthController;
  let newUser: User;
  let loginData: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRoot({
          dialect: 'mysql',
          host: process.env.TEST_DB_HOST,
          port: Number(process.env.TEST_DB_PORT),
          username: process.env.TEST_DB_USER,
          password: process.env.TEST_DB_PASS,
          database: process.env.TEST_DB_NAME,
          autoLoadModels: true,
          synchronize: true,
          models: [User],
        }),
        SequelizeModule.forFeature([User]),
        // JwtModule.register({
        //   secret: process.env.JWT_KEY,
        //   signOptions: {
        //     expiresIn: process.env.TOKEN_EXPIRY_HRS + 'h',
        //   },
        // }),
      ],
      controllers: [AuthController, UserController],
      providers: [
        UserService,
        AuthService,
        { provide: MailService, useValue: createMock<MailService>() },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue('abcdefghi'),
            verify: jest.fn(),
          },
        },
        ...userProviders,
      ],
      exports: [SequelizeModule],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    userController = module.get<UserController>(UserController);
  });

  it('User => Create', async () => {
    let dto = new CreateUserDto();
    dto.companyID = 1;
    expect(userController.create(dto)).rejects.toThrow();

    let dto1 = new CreateUserDto();
    dto1.companyID = 1;
    dto1.email = 'test@test.com';
    expect(userController.create(dto1)).rejects.toThrow();

    let dto2 = new CreateUserDto();
    dto2.companyID = 1;
    dto2.email = 'test@test.com';
    dto2.firstName = 'Test';
    expect(userController.create(dto2)).rejects.toThrow();

    // creating unique variables is necessary
    let dto3 = new CreateUserDto();
    dto3.companyID = 1;
    dto3.email = 'test@test.com';
    dto3.firstName = 'Test';
    dto3.lastName = 'User';
    dto3.strKey = 'I AM A NEW USER';
    dto3.password = undefined;
    dto3.userType = 'Student';

    newUser = await userController.create(dto3);

    expect(newUser).toBeTruthy;
  });

  it('User => Login', async () => {
    let dto = new LoginUserDto();
    dto.email = newUser.email;
    expect(authController.login(dto)).rejects.toThrow();

    let dto1 = new LoginUserDto();
    dto1.email = newUser.email;
    dto1.password = 'I AM A NEW USER';

    loginData = await authController.login(dto1);
    expect(loginData).toBeTruthy;
  });

  // it('User => Reset Password', async () => {
  //   let dto = new ResetPasswordDto();
  //   dto.token = 'xyz';
  //   dto.password = 'NEW PASSWORD';
  //   expect(authController.resetPassword(dto)).resolves.toBeTruthy;
  // });

  it('User => Find All', async () => {
    expect(userController.findAll()).toBeTruthy;
  });

  it('User => Find All Active', async () => {
    expect(userController.findAllActive()).toBeTruthy;
  });

  it('User => Find All For Admin', async () => {
    let companyId = '1';
    expect(userController.findAllForAdmin(companyId)).toBeTruthy;
  });

  it('User => Find All For Teacher', async () => {
    let companyId = '1';
    expect(userController.findAllForTeacher(companyId)).toBeTruthy;
  });

  it('User => Find One', () => {
    expect(userController.findOne(newUser.userID.toString())).toBeTruthy;
  });

  it('User => Delete', () => {
    expect(userController.remove(newUser.userID.toString())).toBeTruthy;
  });
});
