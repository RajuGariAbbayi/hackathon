import { Column, PrimaryGeneratedColumn } from "typeorm";

/**
 * Slots Entity
 */
export class Slots {

    /**
     * id will be pk
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * doctor wil be string
     */
    @Column()
    doctor: string;

    /**
     * Start Time will be a string
     */
    @Column()
    startTime: string;

    /**
     * End Time will be a string
     */
    @Column()
    endTime: string;

    /**
     * Status will be a string
     */
    @Column()
    status: string;

}