import { IsEmail, IsNotEmpty } from "class-validator";

/**
 * @author Rashmi Gupta
 * LoginDTO
 */
export class LoginDTO {

    /**
     * Email should be string and not empty
     */
    @IsNotEmpty({ message: 'emailId can not be empty' })
    @IsEmail({messge:'emailId should be a email'})
    emailId: string;

    /**
     * Password should be string
     */
    @IsNotEmpty({ message: 'Password can not be empty' })
    password: string;
}