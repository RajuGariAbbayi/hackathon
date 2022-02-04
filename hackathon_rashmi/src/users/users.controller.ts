import { Controller, Get, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { ApiNotFoundResponse, ApiOkResponse } from "@nestjs/swagger";
import { NO_BOOKINGS_AVAILABLE, BOOKING_LIST } from "../constant";
import { UsersService } from "./users.service";

/**
 * @author Rashmi Gupta
 * User Controller
 */
@Controller()
export class UsersController {

    /**
     * Dependency 
     * @param usersService UsersService
     */
    constructor(private readonly usersService: UsersService) { }
/**
     * Get Benificiary By Id
     * @param id number
     * @returns Success or Failure
     */
    @ApiOkResponse({description:BOOKING_LIST,status:HttpStatus.OK})
    @ApiNotFoundResponse({description:NO_BOOKINGS_AVAILABLE,status:HttpStatus.INTERNAL_SERVER_ERROR})
    @Get(':id/bookings')
    bookingHistory(@Param('id',ParseIntPipe)id:number):Promise<any>{
        return this.usersService.bookingHistory(id);
    }
}