import { ConflictException, HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger, UnauthorizedException, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs';
import { INVALID_CREDENTIALS, USER_ALREADY_EXIST, USER_AUTHENTICATED, USER_NOT_REGISTER, USER_REGISTERD, NO_BOOKINGS_AVAILABLE } from "../constant";
import { JwtPayload } from "./jwt/jwt-payload.interface";
import { LoginDTO } from "./login.dto";
import { UsersDTO } from "./users.dto";
import { UsersRepository } from "./users.repository";

/**
 * @author Rashmi Gupta
 * User Service
 */
@Injectable()
export class UsersService {

  /**
   * Logger
   */
  logger = new Logger(UsersService.name);

  /**
   * Dependency
   * @param usersRepo UsersRepository
   * @param jwtService JwtService
   */
  constructor(private usersRepo: UsersRepository,
    private jwtService: JwtService) { }

  
/**
 * Booking History
 * @param id number
 */
  async bookingHistory(id:number):Promise<any>{
    try{
        const response = await this.usersRepo.findOne(id,{relations:['bookings']});
        if(response){
            return response;
        }else{
            const msg :string=`${NO_BOOKINGS_AVAILABLE}`;
            throw new NotFoundException(msg);
        }
    }catch(error){
        this.logger.error(error.message);
        throw new NotFoundException(error.message)
    }
}




}