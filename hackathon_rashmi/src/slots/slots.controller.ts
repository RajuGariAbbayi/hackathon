import { SlotsService } from "./slots.service";
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiTags, ApiNotFoundResponse } from "@nestjs/swagger";
import { Post, HttpStatus, ParseIntPipe, Get, Body, Controller, Param } from "@nestjs/common";
import { SLOT_ADD_SUCCESS, SLOT_CONFLICT, SLOTS_NOT_AVAILABLE } from "src/constant";
import { SlotsDTO } from "./slots.dto";

/**
 * SlotsController
 */
@ApiTags('Slots')
@Controller()
export class SlotsController {

    /**
     * Dependency
     * @param slotsService SlotsService
     */
    constructor(private readonly slotsService: SlotsService) { }

    /**
     * Add Benficiary
     * @param benificiary BenificiaryDTO
     * @returns Success or Failure
     */
    @ApiCreatedResponse({ description:SLOT_ADD_SUCCESS, status: HttpStatus.CREATED })
    @ApiInternalServerErrorResponse({ description: SLOT_CONFLICT, status: HttpStatus.INTERNAL_SERVER_ERROR })
    @Post("slots")
    addSlots(@Body() slots: SlotsDTO):Promise<string>{
        return this.slotsService.addSlots(slots)
    }

    /**
     * Get Benificiary By Id
     * @param id number
     * @returns Success or Failure
     */
    @ApiOkResponse({description:SLOT_CONFLICT,status:HttpStatus.OK})
    @ApiNotFoundResponse({description:SLOTS_NOT_AVAILABLE,status:HttpStatus.INTERNAL_SERVER_ERROR})
    @Get(':id/slots')
    listOfslots(@Param('id',ParseIntPipe)id:number):Promise<SlotsDTO>{
        return this.slotsService.listOfslots(id);
    }
}
