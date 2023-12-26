import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { MailService } from '../mail/mail.service';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private readonly userRepository;
    private readonly jwtService;
    private readonly mailService;
    constructor(userRepository: typeof User, jwtService: JwtService, mailService: MailService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findAllActive(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    findOneActiveByEmail(email: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<[affectedCount: number]>;
    updatePassword(id: number, newPassword: string): Promise<[affectedCount: number]>;
    remove(id: number): Promise<number>;
    hash(password: string): Promise<string>;
}
