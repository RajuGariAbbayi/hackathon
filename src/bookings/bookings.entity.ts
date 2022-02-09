import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./status.enum";
import { Slots } from '../slots/slots.entity';
import { Users } from "../users/users.entity";

/**
 * Bookings Entity
 */
@Entity()
export class Bookings {
    
    /**
     * @type:string
     * accepts the string value
     */
    @PrimaryGeneratedColumn()
    id: number;
    
    /**
     * @type:string
     * accepts the string value
     */
    @Column({ type: 'enum', enum: Status, default: Status.Booked })
    status: Status;
    
    /**
     * date
     */
    @Column()
    date: string;

    /**
     * @type:strings
     * accepts the string value
     */
    @Column()
    startTime: string;
    
    /**
     * @type:strings
     * accepts the string value
     */
    @Column()
    endTime: string;
    
    /**
     * @type:strings
     * accepts the string value
     */
    @Column()
    reason: string;
    
    /**
     * Relation between users and bookings
     */
    @ManyToOne(() => Users, (users) => users.bookings)
    users: Users;
    
    /**
     * Relation between slots and bookings
     */
    @ManyToOne(() => Slots, (slots) =>slots.bookings)
    slots:Slots;

}