import { Injectable, Logger } from '@nestjs/common';
import { BookingsRepository } from './bookings.repository';

@Injectable()
export class BookingsService {

    logger = new Logger(BookingsService.name)
    constructor(private bookingsRepo: BookingsRepository) { }
}
