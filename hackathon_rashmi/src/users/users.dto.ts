import { IsNotEmpty, IsEmail, IsNumber } from "class-validator";

export class UsersDTO {

    id: number

    @IsNotEmpty({ message: 'user Name is not empty' })
    name: string;


    @IsNotEmpty({ message: 'Gender Name is not empty' })
    gender: string;


    @IsNotEmpty({ message: 'Age Name is not empty' })
    age: number

    @IsNotEmpty({ message: 'Email cant be empty' })
    @IsEmail({})
    mailId: string;

    @IsNotEmpty({ message: 'Phonenumber cant be empty' })

    phoneNumber: number;

    @IsNotEmpty({ message: 'SSN cant be empty' })
    @IsNumber()
    ssn: number;

    @IsNotEmpty({ message: 'password cant be empty' })
    password: string;

    date: Date

    


}