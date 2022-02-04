import { Injectable, Logger, ConflictException, NotFoundException } from "@nestjs/common";
import { SlotsDTO } from "./slots.dto";
import { SlotsRepository } from "./slots.repository";
import { SLOT_CONFLICT, SLOT_ADD_SUCCESS, SLOTS_NOT_AVAILABLE } from "../constant";

/**
 * @author Rashmi Gupta
 * SlotsService
 */
@Injectable()
export class SlotsService {

     /**
      * Logger
      */
    logger = new Logger(SlotsService.name);

    /**
     * Dependency -
     * @param slotsRepo SlotsRepository
     */
    constructor(private slotsRepo: SlotsRepository){}

    /**
     * Add Slots
     * @param slots slotsDTO
     */
    async addSlots(slots:SlotsDTO):Promise<string>{
        try{
            const response =await this.slotsRepo.save(slots);
            if(response) {
                const msg:string = `${SLOT_ADD_SUCCESS}`;
                return msg;
            }else{
               const msg:string=SLOT_CONFLICT;
                throw new ConflictException(msg);
            }
        }catch(error){
            this.logger.error(error.message);
            if(error.errrno === 1062){
                throw new ConflictException(SLOT_CONFLICT);
            }
        }
    }

   /**
    * List Of Slots
    * @param id number
    */ 
   async listOfslots(id:number):Promise<any>{
       try{
           const response = await this.slotsRepo.findOne(id);
           if(response){
               return response;
           }else{
               const msg :string=`${SLOTS_NOT_AVAILABLE}`;
               throw new NotFoundException(msg);
           }
       }catch(error){
           this.logger.error(error.message);
           throw new NotFoundException(error.message)
       }
   }


}