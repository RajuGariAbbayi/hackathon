import { Doctor } from './../doctor dto/doctor.entity';
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../role.enum";
/**
 * Entity class user
 */
@Entity()
export class User {

    /**
     * generate number by default
     * @type number
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * accepts string
     * @type string
     */
    @Column()
    name: string;

    /**
     * accepts string
     * @type string
     */
    @Column({ unique: true })
    emailId: string;

    /**
     * accepts string
     * @type string
     */
    @Column()
    password: string;

    /**
     * accepts number
     * @type number
     */
    @Column("uuid")
    phoneNumber: number;

    /**
     * accepts number
     * @type number
     */
    @Column()
    age: number;

    /**
     * accepts string
     * @type string
     */
    @Column()
    gender: string;

    /**
     * accepts string
     * @type string
     */
    @Column()
    ssn: string;

    /**
     * takes date automatically
     * @type date
     */
    @CreateDateColumn()
    date: Date;

    /**
     * default it would be user only
     * @type role
     */
    @Column({ type: 'enum', enum: Role, default: Role.User })
    role: Role;

    /**
     * one to one relation
     */
    @OneToOne(() => Doctor, doctor => doctor.user, { cascade:true, onDelete:'CASCADE' })
    doctor: Doctor;
}
