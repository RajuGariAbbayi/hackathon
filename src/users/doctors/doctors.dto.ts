import { IsNotEmpty } from "class-validator";
import { Users } from "../users.entity";

/**
 * Doctors dto class
 */
export class DoctorsDTO {

    /**
     * auto generate number using typeOrm
     * @type number
     */
    id: number;

    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty({ message: `Experience shouldn't be empty` })
    experience: string;

    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty({ message: `Education shouldn't be empty` })
    education: string;

    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty({ message: `Specialization shouldn't be empty` })
    specialization: string;


    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty({ message: `Description shouldn't be empty` })
    description: string;

    /**
     * accepts only number
     * @type number
     */
    @IsNotEmpty({ message: `Rating shouldn't be empty` })
    rating: number;

    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty({ message: `ConsultationFee shouldn't be empty` })
    consultationFee: number;

    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty({ message: `Location shouldn't be empty` })
    location: string;

    /**
     * Register column for store the registred in the table
     */
    @IsNotEmpty({ message: `Users shouldn't be empty` })
    users: Users;
}
