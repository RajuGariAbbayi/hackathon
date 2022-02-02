import { Body, Controller, Get, HttpStatus, Logger, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBasicAuth, ApiBody, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FAILED_FETCH_SLOTS, SLOTS_ADDED, SLOTS_FETCHED_SUCCESS, SLOTS_ID_NOTFOUND, SLOTS_NOT_FOUND, SLOTS_NOT_SOLD, SLOTS_SOLD } from 'constant';
import { JwtAuthGuard } from 'src/users/guards/jwt-auth.guard';
import { SlotsDTO } from './slots.dto';
import { Slots } from './slots.entity';
import { SlotsService } from './slots.service';
import { StatusDTO } from './status.dto';

/**
 * slots Controller includes handler fro CRUD operation
 * @author : sakshi shetty
 */
 @ApiBasicAuth('swagger-auth')
 @ApiTags('Slots')
 @UseGuards(JwtAuthGuard)
@Controller('slots')
export class SlotsController {
    constructor(private slotsService: SlotsService) { }


    /**
     * Logger instance
     */
     logger = new Logger(SlotsController.name)
  

     /**
     * Adding a new books
     * @param books
     * @returns 
     */
     @ApiOkResponse({ description: SLOTS_ADDED, status: HttpStatus.OK })
     @ApiNotFoundResponse({ description: SLOTS_NOT_FOUND, status: HttpStatus.NOT_FOUND })
     @ApiInternalServerErrorResponse({ description: FAILED_FETCH_SLOTS, status: HttpStatus.INTERNAL_SERVER_ERROR })
     @Post()
     addNewSlots(@Body() slotss: SlotsDTO): Promise<string> {
         return this.slotsService.addNewSlots(slotss);
     }
 
     /**
      * Books fetched the successfully
      * @returns 
      */
     @ApiOkResponse({ description: SLOTS_FETCHED_SUCCESS , status: HttpStatus.OK })
     @ApiNotFoundResponse({ description: SLOTS_ID_NOTFOUND, status: HttpStatus.NOT_FOUND })
     @ApiInternalServerErrorResponse({ description: FAILED_FETCH_SLOTS, status: HttpStatus.INTERNAL_SERVER_ERROR })
     @Get()
     listOfSlots(): Promise<Slots[]> {
         return this.slotsService.listOfSlots();
     }
 
     /**
      * update Book
      * @param id 
      * @param statusDTO 
      * @returns 
      */
     @ApiOkResponse({ description: SLOTS_SOLD, status: HttpStatus.OK })
     @ApiNotFoundResponse({ description: SLOTS_NOT_SOLD, status: HttpStatus.NOT_FOUND })
     @ApiInternalServerErrorResponse({ description: FAILED_FETCH_SLOTS, status: HttpStatus.INTERNAL_SERVER_ERROR })
     @ApiBody({
         description: 'Update Status', type: StatusDTO
     })
     @Patch(':id')
     updateSlots(@Param('id') id: number, @Body() statusDTO: StatusDTO): Promise<string> {
         return this.slotsService.updateSlots(id, statusDTO);
     }
 

}
