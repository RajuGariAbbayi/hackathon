import { DoctorRepository } from './doctor dto/doctor.repository';
import { DoctorDTO } from './doctor dto/doctor.dto';
import { UserRepository } from './user.repository';
import { ConflictException, HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import { UserDTO } from './user dto/user.dto';
import { LoginDTO } from './login.dto';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { User } from './user dto/user.entity';

/**
 * service class
 * @author suryakumarraju
 */
@Injectable()
export class UserService {
    /**
     * logger used for debugging
     */
    logger = new Logger(UserService.name)
    /**
     * dependency injection
     * @param userRepo user repository
     * @param jwtService jwt service
     */
    constructor(private userRepo: UserRepository,
        private doctorRepo: DoctorRepository,
        private jwtService: JwtService) { }
    /**
     * user registaration
     * @param user userDTO
     * @returns user registered succesful
     */
    async register(user: UserDTO, doctor: DoctorDTO): Promise<string> {
        try {
            const { password } = user;
            const salt: UserDTO = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const response: UserDTO = await this.userRepo.save({ ...user, password: hashedPassword });
            if (response) {
                const message: string = `user registered successfully with id : ${response.id}`;
                this.logger.log(message);
                return message
            } else {
                const msg: string = 'user Failed to register'
                this.logger.error(msg);
                throw new InternalServerErrorException(msg);
            }
        } catch (error) {
            this.logger.error(error.message);
            if (error.errno === 1062) {
                throw new ConflictException('User already exists');
            }
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * user logged successful
     * @param loginDTO loginDTO
     * @returns token value
     */
    async logIn(loginDTO: LoginDTO): Promise<{ token }> {
        try {
            const userInfo: User = await this.userRepo.findOneOrFail({ emailId: loginDTO.emailId })
            if (userInfo && await bcrypt.compare(loginDTO.password, userInfo.password)) {
                console.log(`user with login details fetch successfully`)
                const payload: JwtPayload = { emailId: userInfo.emailId }
                let token: string = this.jwtService.sign(payload);
                console.log(token)
                return { token }
            } else {
                this.logger.error(`Invalid Crendetials`)
                throw new UnauthorizedException(`Invalid Crendetials`);
            }
        } catch (error) {
            this.logger.error(error.message)
            if (error?.status === 401) {
                throw new UnauthorizedException(`Invalid Crendetials`)
            }
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    // /**
    //  * fetching user details
    //  * @returns fetch successful
    //  */
    // async bookingHistory(): Promise<UserDTO[]> {
    //     try {
    //         let result: User[] = await this.userRepo.bookingsHistory()
    //         if (result) {
    //             const msg: string = 'history of bookings'
    //             this.logger.log(msg)
    //             return result
    //         } else {
    //             this.logger.error('user bookings not found')
    //             throw new HttpException('user bookings not found', HttpStatus.NOT_FOUND)
    //         }
    //     } catch (error) {
    //         throw new HttpException(error.message, HttpStatus.NOT_FOUND)
    //     }
    // }

}
