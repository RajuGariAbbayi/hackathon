import { HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { LIST_OF_SLOTS, NOT_ABLE_FETCH, SLOTS_ADDED_ID, SLOTS_NOTFOUND_ID, SLOTS_STATUS_SUCCESS, UNABLE_TO_UPDATE } from 'constant';
import { Users } from 'src/users/users.entity';
import { UsersRepository } from 'src/users/users.repository';
import { SlotsDTO } from './slots.dto';
import { Slots } from './slots.entity';
import { SlotsRepository } from './slots.repository';
import { StatusDTO } from './status.dto';

/**
 * It will insert/update/delete/retrieve books information in the database/repository
 */
@Injectable()
export class SlotsService {

    /**
   * Logger Instance
   */
  logger = new Logger(SlotsService.name);

  /**
   * Dependency Injection
   * @param slotsRepository 
   * @param usersRepository 
   */
  constructor(private slotsRepository: SlotsRepository,
    private usersRepository: UsersRepository) { }


  /**
   * create/insert into a database 
   * @param books 
   * @returns 
   * @throws InternalServerErrorException(errorMessage)
   */
 async addNewSlots(slotss:SlotsDTO): Promise<string> {
  try {
    let response = await this.slotsRepository.save(slotss);
   if (response) {
      const message: string = SLOTS_ADDED_ID + `${response.id}`;
       this.logger.log(message)
       return message;
     } else {
       throw new NotFoundException( SLOTS_NOTFOUND_ID)
      // throw new NotFoundException( SLOTS_NOTFOUND_ID +  `${books.users}`)
      }

    }   catch (error) {
     this.logger.error(error.message);
      throw new InternalServerErrorException(error.message);
    }
  }
 /**
   * Fetching the data
   * @returns  
   */
  async listOfSlots(): Promise<Slots[]> {
    try {
      const response:Slots[] = await this.slotsRepository.find({ where: { status: 'Available' }, });
      if (response) {
        const msg:string =  LIST_OF_SLOTS ;
        this.logger.log(msg);
        return response;
      } else {
        const message:string = NOT_ABLE_FETCH;
        this.logger.error(message);
        throw new HttpException(message, HttpStatus.BAD_REQUEST);
      }
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }



  /**
   * Update the status
   * @param id 
   * @param statusDTO 
   * @returns 
   */
   async updateSlots(id: number, statusDTO: StatusDTO): Promise<string> {
    try {
      let users: Users = await this.usersRepository.findOne({ where: { id: statusDTO.users } })
      if (users) {
        let response  = await this.slotsRepository.changeStatus(id, users)
       
       if (response) {
          const message: string = SLOTS_STATUS_SUCCESS
          this.logger.log(message)
          return message;
        }
        else {
          throw new InternalServerErrorException(UNABLE_TO_UPDATE)
        }
      }
    } catch (error) {
      this.logger.error(error.message);
      throw new InternalServerErrorException(error.message);
    }
  }
}
