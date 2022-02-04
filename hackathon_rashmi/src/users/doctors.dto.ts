import { IsNotEmpty } from "class-validator";
import { Users } from "./users.entity";

/**
 * DoctorDTO
 */
export class DoctorDTO {

    /**
     * id:number
     */
    id: number;

    /**
     * experience
     */
    @IsNotEmpty({ message: `Experience shouldn't be empty` })
    experience: string;

    /**
     * education
     */
    @IsNotEmpty({ message: `Education shouldn't be empty` })
    education: string;

    /**
     * specialization
     */
    @IsNotEmpty({ message: `Specialization shouldn't be empty` })
    specialization: string;

     /**
      * description
      */
    @IsNotEmpty({ message: `Description shouldn't be empty` })
    description: string;

    /**
     * rating
     */
    @IsNotEmpty({ message: `Rating shouldn't be empty` })
    rating: string;

     /**
      * consultationFee
      */
    @IsNotEmpty({ message: `ConsultationFee shouldn't be empty` })
    consultationFee: string;

    /**
     * location
     */
    @IsNotEmpty({ message: `Location shouldn't be empty` })
    location: string;

    /**
     * users
     */
    @IsNotEmpty({ message: `Users shouldn't be empty` })
    users: Users;



}