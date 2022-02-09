import { Body, Controller, Get, HttpStatus, Logger, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ApiBasicAuth, ApiConflictResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CONFLICT_EXCEPTION, FAILED_TO_FETCH, NOT_FOUND, USER_LOGIN, USER_REGISTERED } from '../../constant';
import { DoctorsDTO } from './doctors/doctors.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { LoginDTO } from './login.dto';
import { Role } from './role.enum';
import { Roles } from './roles/roles.decorators';
import { UsersDTO } from './users.dto';
import { UsersService } from './users.service';

/**
 * Users Controller includes handler fro CRUD operation
 * @author : sakshi shetty
 */
@ApiBasicAuth('swagger-auth')
@ApiTags('Users')
@Controller('users')
export class UsersController {
    /**
     * Logger Instance
     */
    logger = new Logger(UsersController.name)

    /**
     * Deoendency Injection
     * @param usersService 
     */
    constructor(private usersService: UsersService) { }

    /**
    * Register for user
    * @param registerDto 
    * @returns success or failure message
    */
    @ApiOkResponse({ description: USER_REGISTERED, status: HttpStatus.OK })
    @ApiNotFoundResponse({ description: NOT_FOUND, status: HttpStatus.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: FAILED_TO_FETCH, status: HttpStatus.INTERNAL_SERVER_ERROR })
    @ApiConflictResponse({ description: CONFLICT_EXCEPTION, status: HttpStatus.CONFLICT })
    @Post()
    register(@Body() userDTO: UsersDTO): Promise<string> {
        return this.usersService.register(userDTO);
    }

    /**
     * user login successful
     * @param userLogin userLogin
     * @returns success or failure
     */
    @ApiOkResponse({ description: USER_LOGIN, status: HttpStatus.OK })
    @ApiNotFoundResponse({ description: NOT_FOUND, status: HttpStatus.NOT_FOUND })
    @ApiInternalServerErrorResponse({ description: FAILED_TO_FETCH, status: HttpStatus.INTERNAL_SERVER_ERROR })
    @Post('/login')
    logIn(@Body() loginDTO: LoginDTO): Promise<{ token }> {
        this.logger.log(USER_LOGIN)
        return this.usersService.logIn(loginDTO)
    }

    /**
     * doctor registration
     * @param doctorDTO doctorDTO
     * @returns success or failure
     */
    @Roles(Role.Doctor)
    @UseGuards(RolesGuard, JwtAuthGuard)
    @Post('/doctor')
    @ApiOkResponse({ description: 'Doctor reigstered successful', status: HttpStatus.OK, })
    @ApiConflictResponse({ description: 'Doctor already exists', status: HttpStatus.CONFLICT })
    registerDoctor(@Body() doctorDTO: DoctorsDTO): Promise<string> {
        return this.usersService.registerDoctor(doctorDTO);
    }

    /**
     * fetch medical detials
     * @param id using id
     * @returns success or failure
     */
    @Get()
    @ApiOkResponse({ description: 'Medical details fetch successful', status: HttpStatus.OK, })
    @ApiConflictResponse({ description: 'Unable to fetch medical history', status: HttpStatus.CONFLICT })
    getmedicalHistory(@Param('id', ParseIntPipe) id:number):Promise<any>{
        this.logger.log('medical history fetch successful')
        return this.usersService.getmedicalHistory(id);
    }
}
