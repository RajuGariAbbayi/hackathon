import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "../users.entity";

/**
 * Doctors entity class
 */
@Entity()
export class Doctors {
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
  experience: string;

  /**
   * @type:string
   * accepts the string value
   */
  @Column()
  education: string;

  /**
   * @type:string
   * accepts the string value
   */
  @Column()
  specialization: string;

  /**
   * @type:string
   * accepts the string value
   */
  @Column()
  description: string;

  /**
   * @type:number
   * accepts the integer value
   */
  @Column()
  rating: number;

  /**
   * @type:number
   * accepts the integer value
   */
  @Column()
  consultationFee: number;

  /**
   * @type:string
   * accepts the string value
   */
  @Column()
  location: string;

  /**
   * Relation between users and doctors(one to one)
   */
  @OneToOne(() => Users, users => users.doctor)
  @JoinColumn()
  users: Users
}
