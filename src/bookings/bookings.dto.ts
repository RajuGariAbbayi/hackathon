import { IsNotEmpty, IsString } from "class-validator";
import { Slots } from "../slots/slots.entity";
import { Users } from "../users/users.entity";
import { Status } from "./status.enum";

/**
 * bookingsDTO
 */
export class BookingsDTO {

    /**
     * @type:number
     * accepts the string value
     */
    id: number;

    /**
     * @type:string
     * accepts the string value
     */
    status: Status;

    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty()
    @IsString()
    date: string;

    /**
     * @type:string
     * accepts the string value
     */
    @IsNotEmpty()
    @IsString()
    startTime: string;

    /**
     * @type:strings
     * accepts the string value
     */
    @IsNotEmpty()
    @IsString()
    endTime: string;

    /**
     * @type:strings
     *  accepts the string value
     */
    @IsNotEmpty()
    @IsString()
    reason: string;

    /**
     * Relation between users and slots
     */
    @IsNotEmpty()
    users: Users;

    /**
     * Relation between slots and bookings
     */
    @IsNotEmpty()
    slots: Slots;
}