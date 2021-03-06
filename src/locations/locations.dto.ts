import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";
import { Slots } from "src/slots/slots.entity";


/**
 * locations dto class
 */
 export class LocationsDTO {
    id: number;

    /**
     * @type : string
     * accepts the string value
     */
    @IsNotEmpty({ message: 'cityName is not empty' })
    cityName: string;
    
    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty({ message: 'Gender  is not empty' })
    contactPerson: string;


    /**
     * @type:integer
     * accepts the string value
     */
     @IsNotEmpty({ message: 'phoneNumber is not empty' })
     phoneNumber:number

    /**
     * @type : string
     * accepts the string value
     */
    @IsNotEmpty({ message: 'visit cant be empty' })
    visit: string;

    /**
     * @type : number
     * accepts the interger value
     */
    @IsNotEmpty({ message: 'Hospital cant be empty' })
    hospital: string;

    slots: Slots[]
    
    
  
}

