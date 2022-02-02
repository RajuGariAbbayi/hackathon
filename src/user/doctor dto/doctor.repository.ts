import { Doctor } from './doctor.entity';
import { EntityRepository, Repository } from "typeorm";

/**
 * Doctor repository class
 */
@EntityRepository(Doctor)
export class DoctorRepository extends Repository<Doctor>{

}