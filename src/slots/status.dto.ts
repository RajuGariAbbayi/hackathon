import { IsNotEmpty } from "class-validator";
import { Users } from "../users/users.entity";

/**
 * It is used to change the Status
 */
export class StatusDTO {

    /**
     * User should not be empty
     * to change the status user Required
     */
    @IsNotEmpty({ message: 'Users should not be empty' })
    users: Users
}