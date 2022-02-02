import { EntityRepository } from 'typeorm';
import { Repository } from 'typeorm';
import { Bookings } from './booking.entity';

@EntityRepository(Bookings)
export class BookingsRepository extends Repository<Bookings>{

}