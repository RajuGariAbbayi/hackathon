import { IsNotEmpty, IsString } from "class-validator";

/**
 *Slots DTO
 */
export class SlotsDTO {

    /**
     * id will be pk
     * @type string
     */
    id: number;

    /**
     * @type string
     * @field doctor
     */
    @IsString()
    @IsNotEmpty({ message: 'doctor is not empty' })
    doctor: string;

    /**
     * @type string
     * @field startTime
     */
    @IsString()
    @IsNotEmpty({ message: 'startTime is not empty' })
    startTime: string;

    /**
     * @type string
     * @field endTime
     */
    @IsString()
    @IsNotEmpty({ message: 'endTime is not empty' })
    endTime: string;

    /**
     *  @type string
     * @field status
     */
    @IsString()
    @IsNotEmpty({ message: 'status is not empty' })
    status: string;

}