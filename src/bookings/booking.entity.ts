import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Status } from "./status.enum";

@Entity()
export class Bookings {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'enum', enum: Status, default: Status.Booked })
    status: Status;

    @Column()
    date: string;

    @Column()
    startTime: string;

    @Column()
    endTime: string;

    @Column()
    reason: string;
}