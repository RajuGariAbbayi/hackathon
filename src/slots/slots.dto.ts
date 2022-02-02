import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";
import { Bookings } from "src/bookings/bookings.entity";
import { Locations } from "src/locations/locations.entity";
import { Users } from "src/users/users.entity";


/**
 * locations dto class
 */
export class SlotsDTO {
    id: number;

    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty({ message: 'startTime  is not empty' })
    startTime: string;


    /**
     * @type:integer
     * accepts the string value
     */
    @IsNotEmpty({ message: 'endTime is not empty' })
    endTime: string;

    /**
    * @type:string
    * accepts the string value
    */
    status: string;

     /**
      * @type:string
      * accepts the string value
      */
    @IsNotEmpty({ message: 'hospital is not empty' })
    hospital: string;


    /**
     * User column for store products id in the tabel
     */
    @IsNotEmpty({ message: 'users cant be empty' })
    users: Users

    /**
     * Relation between slots and locations
     */
     @IsNotEmpty()
    locations: Locations;

    /**
     * Relations between 
     */
    bookings: Bookings[];


}

