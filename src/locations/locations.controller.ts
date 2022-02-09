import { Body, CacheInterceptor, Controller, Get, HttpStatus, Logger, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBasicAuth, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FAILED_FETCH_LOCATIONS, LOCATIONS_ADDED, LOCATIONS_FETCHED_SUCCESS, LOCATIONS_ID_NOTFOUND, LOCATIONS_NOT_FOUND } from '../../constant';
import { JwtAuthGuard } from '../users/guards/jwt-auth.guard';
import { LocationsDTO } from './locations.dto';
import { LocationsService } from './locations.service';

/**
 * locations Controller includes handler fro CRUD operation
 * @author : suryakuamrraju
 */
@ApiBasicAuth('swagger-auth')
@ApiTags('Locations')
@UseGuards(JwtAuthGuard)
@Controller('locations')
export class LocationsController {

    /**
     * Logger Instance
     */
    logger = new Logger(LocationsController.name)

    /**
     * Deoendency Injection
     * @param locationsService 
     */
    constructor(private locationsService: LocationsService) { }

    /**
     * Create a new locations
     * @param category 
     * @returns 
     */
    @ApiOkResponse({ description: LOCATIONS_ADDED, status: HttpStatus.OK })
    @ApiNotFoundResponse({ description: LOCATIONS_NOT_FOUND, status: HttpStatus.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: FAILED_FETCH_LOCATIONS, status: HttpStatus.INTERNAL_SERVER_ERROR })
    @Post()
    addNewLocations(@Body() locations: LocationsDTO): Promise<String> {
        return this.locationsService.addNewLocations(locations);
    }

    /**
     * Fetch all the locations
     * @returns list of locations
     */
    @ApiOkResponse({ description: LOCATIONS_FETCHED_SUCCESS, status: HttpStatus.OK })
    @ApiNotFoundResponse({ description: LOCATIONS_ID_NOTFOUND, status: HttpStatus.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: FAILED_FETCH_LOCATIONS, status: HttpStatus.INTERNAL_SERVER_ERROR })
    // @UseInterceptors(CacheInterceptor)
    @Get()
    listOfLocations(): Promise<LocationsDTO[]> {
        return this.locationsService.listOfLocations();
    }
}
