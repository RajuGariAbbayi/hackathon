import { IsEmail, IsNotEmpty } from "class-validator";

/**
 * login dto
 */
export class LoginDTO {
    /**
     * accepts string
     * @type string
     */
    @IsNotEmpty({ message: 'EmailId is required' })
    @IsEmail({ message: 'Enter valid email id' })
    emailId: string;

    /**
     * accepts string
     * @type string
     */
    @IsNotEmpty({ message: 'Password is required' })
    password: string;
}