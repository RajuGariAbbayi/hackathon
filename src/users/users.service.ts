import { ConflictException, HttpException, HttpStatus, Injectable, InternalServerErrorException, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersDTO } from './users.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcryptjs';
import { LoginDTO } from './login.dto';
import { JwtPayload } from './jwt/jwt-payload.interface';
import { DoctorsDTO } from './doctors/doctors.dto';
import { Users } from './users.entity';
import { DoctorRepository } from './doctors/doctors.repository';
import { Doctors } from './doctors/doctors.entity';

/**
 * It will insert/update/delete/retrieve users information in the database/repository
 * @author suryakumarraju
 */
@Injectable()
export class UsersService {

    /**
    * Logger Instance
    */
    logger = new Logger(UsersService.name);

    /**
     * Dependency Injection
     * @param usersRepository 
     * @param cacheManager 
     * @param jwtService 
     */
    constructor(private usersRepository: UsersRepository,
        private doctorRepository: DoctorRepository,
        private jwtService: JwtService) { }

    /**
     * user reigstration
     * @param usersDto usersDto
     * @returns success or failre
     */
    async register(users: UsersDTO): Promise<string> {
        try {
            const { password } = users;
            const salt: UsersDTO = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);
            const res = await this.usersRepository.save({ ...users, password: hashedPassword });
            if (res) {
                const message: string = `user registered successfully with id : ${res.emailId}`;
                this.logger.log(message);
                return message
            } else {
                const msg: string = 'Unable to register , please try again later'
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
     * Login user
     * @param userLogin userlogin
     * @returns generate token
     */
    async logIn(loginDTO: LoginDTO): Promise<{ token }> {
        try {
            const userInfo: Users = await this.usersRepository.findOneOrFail({ emailId: loginDTO.emailId })
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

    /**
     * doctor registration
     * @param doctor doctorDto
     * @returns doctor registered successful
     */
    async registerDoctor(doctor: DoctorsDTO): Promise<string> {
        try {
            const response: Doctors = await this.doctorRepository.save(doctor)
            if (response) {
                const message: string = `Doctor registered successfully with id : ${response.id}`;
                this.logger.log(message);
                return message
            } else {
                const msg: string = 'doctor Failed to register'
                this.logger.error(msg);
                throw new InternalServerErrorException(msg);
            }
        } catch (error) {
            this.logger.error(error.message);
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * specific user medical history
     * @param id using id
     * @returns medical history
     */
    async getmedicalHistory(id: number): Promise<any> {
        try {
            const response: UsersDTO = await this.usersRepository.findOne({ select: ['name', 'emailId', 'phoneNumber'], relations: ['bookings'] })
            if (response) {
                const message: string = 'bookings history fetch successful'
                this.logger.log(message);
                return response
            } else {
                const msg: string = 'Failed to fetch medical history'
                this.logger.error(msg);
                throw new InternalServerErrorException(msg);
            }
        } catch (error) {
            this.logger.error(error.message);
            throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
