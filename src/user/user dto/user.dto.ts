import { Doctor } from './../doctor dto/doctor.entity';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Role } from "../role.enum";
/**
 * UserDTO
 */
export class UserDTO {
    /**
     * accepts number
     * @type number
     */
    id: number;

    /**
     * accepts string
     * @type string
     */
    @IsNotEmpty()
    @IsString()
    name: string;

    /**
     * accepts string
     * @type string
     */
    @IsNotEmpty()
    @IsString()
    @IsEmail({ contains: '@mail.com' })
    emailId: string;

    /**
     * accepts string
     * @type string
     */
    @IsNotEmpty()
    @IsString()
    password: string;

    /**
     * accepts string
     * @type number
     */
    @IsNotEmpty()
    @IsNumber()
    phoneNumber: number;

    /**
     * accepts only number
     * @type number
     */
    @IsNotEmpty()
    @IsNumber()
    age: number;

    /**
     * accepts only string
     * @type string
     */
    @IsString()
    @IsNotEmpty()
    gender: string;

    /**
     * input need to be string
     * @field string
     */
    @IsString()
    @IsNotEmpty()
    ssn:string;

    /**
     * date takes input automatically
     */
    date:Date;

    /**
     * role admin & user
     */
    role: Role;
    
    doctor:Doctor;
    
}