import { Timestamp } from "rxjs";


export class CreateUserDto {
     username: string;
     password: string;
     writer: boolean;
     headline: string;
     role: string;
     hours: number;
     verified: boolean;
     works: string[];
     created: Date;

}
  