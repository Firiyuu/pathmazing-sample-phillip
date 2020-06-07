import { Injectable } from '@nestjs/common';
import {sign } from 'jsonwebtoken'
import { UserService } from 'src/shared/user.service';

@Injectable()
export class AuthService {

    constructor( private userService: UserService){}


    async signPayload(payload: any){
        return sign(payload, 'secretKey', {expiresIn: '12h'});
    }


    async validateuser(payload: any){
        return await this.userService.findByPayload(payload)
    }


}
