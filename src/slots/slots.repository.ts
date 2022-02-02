import { Users } from "src/users/users.entity";
import { EntityRepository, Repository } from "typeorm";
import { Slots } from "./slots.entity";
import { Status } from "./status.enum";

/**
 * used to connect with database using typeORM
 */
 @EntityRepository(Slots)
 export class SlotsRepository extends Repository<Slots>{

     /**
     * Used query builder to update the status
     * @param id 
     * @param Users 
     * @returns 
     */
      async changeStatus(id:number, users:Users){
        return await this.update(id,{status:Status.sold,users})
    }

 }
