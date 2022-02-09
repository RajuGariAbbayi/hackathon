import { contains, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Bookings } from "../bookings/bookings.entity";
import { Doctors } from "./doctors/doctors.entity";
import { Role } from "./role.enum";

/**
 * User dto class
 */
export class UsersDTO {

    /**
     * number auto generated
     */
    id: number;

    /**
     * @type : string
     * accepts the string value
     */
    @IsNotEmpty({ message: 'Name is not empty' })
    @IsString()
    name: string;

    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty({ message: 'Gender is not empty' })
    @IsString()
    gender: string;

    /**
     * @type:integer
     * accepts the string value
     */
    @IsNotEmpty({ message: 'Age is not empty' })
    @IsNumber()
    age: number

    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty({ message: 'Email cant be empty' })
    @IsEmail()
    emailId: string;

    /**
     * @type:number
     * accepts the interger value
     */
    @IsNotEmpty({ message: 'Phonenumber cant be empty' })
    @IsNumber()
    phoneNumber: number;

    /**
     * @type:number
     * accepts the interger value
     */
    @IsNotEmpty({ message: 'SSN cant be empty' })
    @IsNumber()
    ssn: number

    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty({ message: 'password cant be empty' })
    @IsString()
    password: string;

    /**
     * @type:date
     * auto generated Date
     */
    date: Date

    /**
     * adding new column by default
     */
    role: Role;

    /**
     * user to doctor relaiton
     */
    doctor: Doctors;

    /**
     * user to booking relation
     */
    bookings: Bookings[];
}
