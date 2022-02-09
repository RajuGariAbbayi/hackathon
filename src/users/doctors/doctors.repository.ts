import { EntityRepository, Repository } from "typeorm";
import { Doctors } from "./doctors.entity";

/**
 * used to coonect with database using typeORM
 */
 @EntityRepository(Doctors)
 export class DoctorRepository extends Repository<Doctors>{}