import { Slots } from "src/slots/slots.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


/**
 * Locations entity class
 */
@Entity()
export class Locations {
    /**
     * @type : number
     * primary key and its auto generated by database
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * @type:string
     * accepts the string value
     */
    @Column()
    cityName: string;
    
    /**
     * @type:string
     * accepts the string value
     */
    @Column()
    contactPerson: string;

    /**
     * @type:number
     * accepts the number value
     */
    @Column()
    phoneNumber:number;

    /**
     * @type:string
     * accepts the string value
     */
     @Column()
     visit:string;

    /**
     * @type:string
     * accepts the string value
     */
    @Column()
    hospital: string;

   
    /**
     * Relation between profile and register(one to one)
     */
    @OneToMany(() => Slots, slots => slots.locations)
    slots: Slots[]

    
 


}