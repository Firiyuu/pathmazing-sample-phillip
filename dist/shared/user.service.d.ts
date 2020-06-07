import { Model } from 'mongoose';
import { LoginDTO } from '../users/dto/login-user.dto';
import { RegisterDTO } from '../users/dto/register-user.dto';
import { Payload } from '../types/payload';
import { User } from '../types/user';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    create(userDTO: RegisterDTO): Promise<any>;
    find(): Promise<any>;
    findByLogin(userDTO: LoginDTO): Promise<any>;
    findByPayload(payload: Payload): Promise<any>;
    sanitizeUser(user: User): any;
}
