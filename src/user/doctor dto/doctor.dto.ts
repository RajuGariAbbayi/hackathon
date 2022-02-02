import { IsNumber } from 'class-validator';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../user dto/user.entity';

/**
 * Doctor DTO class
 */
export class DoctorDTO {

    /**
     * accepts number
     * @type number
     */
    id: number;

    /**
     * accepts string
     * @type string
     */
    @IsNotEmpty({message:'experience can`t be empty'})
    @IsString()
    experience: string;
    
    /**
     * accepts string
     * @type string
     */
    @IsNotEmpty({message:'education can`t be empty'})
    @IsString()
    education: string;
    
    /**
     * accepts string
     * @type string
     */
    @IsNotEmpty({message:'specilization can`t be empty'})
    @IsString()
    specilization: string;
    
    /**
     * accepts string
     * @type string
     */
    @IsNotEmpty({message:'description can`t be empty'})
    @IsString()
    description: string;

    /**
     * accepts number
     * @type number
     */
    @IsNotEmpty({message:'rating can`t be empty'})
    @IsNumber()
    rating: number;
    
    /**
     * accepts number
     * @type number
     */
    @IsNotEmpty({message:'consultationFee can`t be empty'})
    @IsNumber()
    consultationFee: number;
    
    /**
     * accepts string
     * @type string
     */
    @IsNotEmpty({message:'location can`t be empty'})
    @IsString()
    location: string;

    /**
     * can't be empty will posting doctor details
     */
    @IsNotEmpty()
    user:User;

}