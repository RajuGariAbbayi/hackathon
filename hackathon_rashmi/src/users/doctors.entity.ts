import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * Doctor entity
 */
@Entity()
export class Doctor {

    /**
     * id number
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * experience
     */
    @Column()
    experience: string;

    /**
     * education
     */
    @Column()
    education: string;

    /**
     * specialization
     */
    @Column()
    specialization: string;

    /**
     * description
     */
    @Column()
    description: string;

    /**
     * rating
     */
    @Column()
    rating: number;

    /**
     * consultationFee
     */
    @Column()
    consultationFee: number;

    /**
     * location
     */
    @Column()
    location: string;

    
}