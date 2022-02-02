import { IsEmail, IsNotEmpty } from 'class-validator';

/**
 * loginDTO
 */
export class LoginDTO {
  /**
   * accepts only string
   * @type string
   */
  @IsNotEmpty({ message: 'EmailId is required' })
  @IsEmail({ message: 'Enter valid email id' })
  emailId: string;

  /**
   * accepts only string
   * @type string
   */
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}