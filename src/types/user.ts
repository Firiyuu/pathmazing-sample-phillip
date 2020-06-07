import { Document } from 'mongoose';



export interface User extends Document{
    toObject();
    username: string;
    password: string;
    writer: boolean;
    headline: string;
    role: string;
    hours: number;
    verified: boolean;
    created: Date;
}
  
