import { EntityRepository, Repository } from "typeorm";
import { Locations } from "./locations.entity";


/**
 * used to coonect with database using typeORM
 */
@EntityRepository(Locations)
export class LocationsRepository extends Repository<Locations>{ }