import { User } from './../user dto/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
/**
 * doctor entity class
 */
@Entity()
export class Doctor{

    /**
     * generate column automatically
     * @type number
     */
    @PrimaryGeneratedColumn()
    id: number;
    
    /**
     * accepts string
     * @type string
     */
    @Column()
    experience: string;
    
    /**
     * accepts string
     * @type string
     */
    @Column()
    education: string;
    
    /**
     * accepts string
     * @type string
     */
    @Column()
    specilization: string;
    
    /**
     * accepts string
     * @type string
     */
    @Column()
    description: string;
    
    /**
     * accepts number
     * @type number
     */
    @Column()
    rating: number;
    
    /**
     * accepts number
     * @type number
     */
    @Column()
    consultationFee: number;
    
    /**
     * accepts string
     * @type string
     */
    @Column()
    location: string;

    /**
     * one to one relation with doctor
     */
    @OneToOne(()=>User,user=>user.doctor)
    user: User;

}