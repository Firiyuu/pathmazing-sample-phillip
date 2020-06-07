import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    findOne(id: any): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    delete(id: any): Promise<User>;
    update(updateUserDto: CreateUserDto, id: any): Promise<User>;
}
