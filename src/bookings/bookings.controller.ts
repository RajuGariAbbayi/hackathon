import { BookingsService } from './bookings.service';
import { Controller, Logger } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('bookings')
@ApiBearerAuth('Swagger-authorization')
export class BookingsController {
    
    logger = new Logger(BookingsController.name)

    constructor(private bookingService:BookingsService){}

    
}
