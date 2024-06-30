/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface TUser {
    firstName:string,
    lastName:string,
    email:string,
    mobile:string,
    password:string,
}

export interface UserModel extends Model<TUser>{
isUserExist(email:string): Promise<TUser>;
isPasswordMatched(email:string,password:string): boolean
}