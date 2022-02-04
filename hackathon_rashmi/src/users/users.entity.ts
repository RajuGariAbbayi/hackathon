import { Column, CreateDateColumn, OneToOne, PrimaryGeneratedColumn, Entity } from "typeorm";
import { Doctor } from "./doctors.entity";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    gender: string;

    @Column()
    age: number;

    @Column({ unique: true })
    emailId: string;

    @Column()
    phoneNumber: number;

    @Column({ unique: true })
    ssn: number;


    @Column()
    password: string;

    @CreateDateColumn() 
    date: Date;

   

}