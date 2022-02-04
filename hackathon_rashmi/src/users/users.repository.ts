import { EntityRepository, Repository } from "typeorm";
import {  Users } from "./users.entity";

/**
 * @author Rashmi Gupta
 * User Repository
 */
@EntityRepository(Users)
export class UsersRepository extends Repository<Users>{ } 