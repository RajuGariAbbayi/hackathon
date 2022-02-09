import { EntityRepository, Repository } from "typeorm";
import { Users } from "./users.entity";

/**
 * used to coonect with database using typeORM
 */
@EntityRepository(Users)
export class UsersRepository extends Repository<Users>{ 

}