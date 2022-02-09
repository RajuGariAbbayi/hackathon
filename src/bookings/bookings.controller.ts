import { BookingsService } from './bookings.service';
import { Body, Controller, HttpStatus, Logger, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBasicAuth, ApiBearerAuth, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BookingsDTO } from './bookings.dto';
import { BOOKINGS_ADDED, BOOKINGS_NOT_FOUND, FAILED_FETCH_BOOKINGS } from '../../constant';
import { JwtAuthGuard } from '../users/guards/jwt-auth.guard';

/**
 * Controller class
 * @author suryakumarraju
 */
@ApiBasicAuth('swagger-auth')
@ApiTags('Bookings')
@UseGuards(JwtAuthGuard)
@Controller('bookings')
@ApiBearerAuth('Swagger-authorization')
export class BookingsController {

    /**
     * Logger instance
     */
    logger = new Logger(BookingsController.name)

    /**
     * Dependency Injection
     * @param bookingService 
     */
    constructor(private bookingService: BookingsService) { }

    /**
     * Create a new locations
     * @param BookingsDTO bookingsDto
     * @returns booking register successful
     */
    @ApiOkResponse({ description: BOOKINGS_ADDED, status: HttpStatus.OK })
    @ApiNotFoundResponse({ description: BOOKINGS_NOT_FOUND, status: HttpStatus.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: FAILED_FETCH_BOOKINGS, status: HttpStatus.INTERNAL_SERVER_ERROR })
    @Post()
    addNewBookings(@Body() Bookings: BookingsDTO): Promise<String> {
        return this.bookingService.addNewBookings(Bookings);
    }
    /**
     * reschedule successful
     * @param id slot id
     * @param startTime 
     * @param endTime 
     * @returns success
     */
    @ApiOkResponse({ description: 'Appointment Rescheduled Successfully', status: HttpStatus.OK })
    @ApiNotFoundResponse({ description: 'Appointment Rescheduled Failed', status: HttpStatus.NOT_FOUND })
    @Patch('/reschedule/:id/:date/:startTime/:endTime')
    rescheduleAppointment(@Param('id') id: number, @Param('startTime') startTime: string, @Param('endTime') endTime: string): Promise<string> {
        return this.bookingService.rescheduleAppointment(id, startTime, endTime);
    }
}
