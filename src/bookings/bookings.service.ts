import { HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { BOOKINGS_ADDED_ID, BOOKINGS_NOTFOUND_ID, REAPPOINTMENT_SCHEDULE, REAPPOINTMENT_SCHEDULE_FAILED, USERDETAILS_FAILED } from '../../constant';
import { BookingsDTO } from './bookings.dto';
import { BookingsRepository } from './bookings.repository';

/**
 * BookingsService class
 */
@Injectable()
export class BookingsService {

    /**
     * logger instance
     */
    logger = new Logger(BookingsService.name)

    /**
     * Dependency Injection
     * @param bookingsRepo bookings Repository
     */
    constructor(private bookingsRepo: BookingsRepository) { }

    /**
     * booking a appointment
     * @param BookingsDTO bookingDto 
     * @returns booking successful
     */
    async addNewBookings(bookings: BookingsDTO): Promise<string> {
        try {
            let response = await this.bookingsRepo.save(bookings);
            if (response) {
                const message: string = BOOKINGS_ADDED_ID
                this.logger.log(message)
                return message;
            } else {
                throw new NotFoundException(BOOKINGS_NOTFOUND_ID)
            }
        } catch (error) {
            this.logger.error(error.message);
            throw new InternalServerErrorException('Unable to fetch bookings details');
        }
    }
    /**
     * reschedule
     * @param id using id
     * @param startTime 
     * @param endTime 
     * @returns success or failure
     */
    async rescheduleAppointment(id: number, startTime: string, endTime: string): Promise<string> {
        try {
            let response = await this.bookingsRepo.findOneOrFail({ where: { id } });
            if (response) {
                let data = await this.bookingsRepo.changeSlot(id, startTime, endTime);
                if (data) {
                    const message = REAPPOINTMENT_SCHEDULE;
                    this.logger.log(REAPPOINTMENT_SCHEDULE);
                    return message;
                }
                else {
                    this.logger.log(REAPPOINTMENT_SCHEDULE_FAILED);
                    throw new InternalServerErrorException(REAPPOINTMENT_SCHEDULE_FAILED)
                }
            } else {
                this.logger.log(USERDETAILS_FAILED);
                throw new InternalServerErrorException(USERDETAILS_FAILED)
            }
        } catch (error) {
            this.logger.error(error.message);
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
