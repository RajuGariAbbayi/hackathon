import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { Bookings } from './bookings.entity';

/**
 * Booking repository
 */
@EntityRepository(Bookings)
export class BookingsRepository extends Repository<Bookings>{

    async changeSlot(id: number, startTime: string, endTime: string) {
        return await this.createQueryBuilder().update(Bookings).set({ startTime: startTime, endTime: endTime }).where("id = :id", { id }).execute()
    }
}