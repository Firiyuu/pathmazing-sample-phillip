import { UserService } from 'src/shared/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    signPayload(payload: any): Promise<string>;
    validateuser(payload: any): Promise<any>;
}
