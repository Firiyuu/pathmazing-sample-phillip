import { UserService } from 'src/shared/user.service';
import { RegisterDTO } from 'src/users/dto/register-user.dto';
import { LoginDTO } from 'src/users/dto/login-user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    tempAuth(): {
        auth: string;
    };
    login(userDTO: LoginDTO): Promise<{
        user: any;
        token: string;
    }>;
    register(userDTO: RegisterDTO): Promise<{
        user: any;
        token: string;
    }>;
}
