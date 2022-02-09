import { HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { LIST_OF_LOCATIONS, LOCATIONS_ADDED_ID, LOCATIONS_NOTFOUND_ID, NOT_ABLE_FETCH } from '../../constant';
import { LocationsDTO } from './locations.dto';
import { Locations } from './locations.entity';
import { LocationsRepository } from './locations.repository';

/**
 * It will insert/update/delete/retrieve locations information in the database/repository
 * @author sakshi shetty
 */
@Injectable()
export class LocationsService {

  /**
   * Logger instance
   */
  logger = new Logger(LocationsService.name);

  /**
   * Dependency Injection
   * @param locationsRepository
   */
  constructor(private locationsRepository: LocationsRepository) { }

  /**
   * location registration
   * @param LocationsDTO locaitondto
   * @returns locaiton added succesful
   */
  async addNewLocations(locations: LocationsDTO): Promise<string> {
    try {
      let response: LocationsDTO = await this.locationsRepository.save(locations);
      if (response) {
        const message: string = LOCATIONS_ADDED_ID + `${response.id}`;
        this.logger.log(message)
        return message;
      } else {
        throw new NotFoundException(LOCATIONS_NOTFOUND_ID)
      }
    } catch (error) {
      this.logger.error(error.message);
      throw new InternalServerErrorException(error.message);
    }
  }

  /**
   * Fetching the data
   * @returns fetch list of locaitons
   */
  async listOfLocations(): Promise<Locations[]> {
    try {
      const response: LocationsDTO[] = await this.locationsRepository.find();
      if (response) {
        const msg: string = LIST_OF_LOCATIONS;
        this.logger.log(msg);
        return response;
      } else {
        const message: string = NOT_ABLE_FETCH;
        this.logger.error(message);
        throw new HttpException(message, HttpStatus.BAD_REQUEST);
      }
    } catch (err) {
      throw new InternalServerErrorException('Unable to post location details');
    }
  }
}
