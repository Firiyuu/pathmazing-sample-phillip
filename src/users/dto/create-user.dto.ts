import { Timestamp } from "rxjs";


export class CreateUserDto {
     username: string;
     password: string;
     writer: boolean;
     headline: string;
     admin: boolean;
     hours: number;
     verified: boolean;
     works: string[];
     created: Date;

}
  