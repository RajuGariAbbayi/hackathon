import { EntityRepository, Repository } from "typeorm";
import { User } from "./user dto/user.entity";
/**
 * User Repository
 */
@EntityRepository(User)
export class UserRepository extends Repository<User>{
    // /**
    //  * user along with of bookings
    //  * @returns data of user
    //  */
    // async bookingsHistory() {
    //     return await this.find({ select: ['id', 'userName', 'emailId', 'phoneNumber'],relations:[bookings]});
    // }

}