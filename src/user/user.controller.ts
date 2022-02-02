import { UserService } from './user.service';
import { Body, Controller, HttpStatus, Logger, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiConflictResponse, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LoginDTO } from './login.dto';
import { USER_CONFLICT, USER_FAILED_LOGIN, USER_LOGIN, USER_NOT_FOUND, USER_REGISTER } from '../../constant';
import { UserDTO } from '../user/user dto/user.dto';

/**
 * User Controller
 * @author suryakumarraju
 */
@ApiBearerAuth('Swagger-authorization')
@ApiTags('User controller')
@Controller('user')
export class UserController {
    /**
     * logger used for debugging
     */
    logger = new Logger(UserController.name)
    /**
     * Dependency Injection
     * @param userService userService
     */
    constructor(private userService: UserService) { }
    /**
     * user registering
     * @param userDTO user details
     * @returns user registered successful
     */
    @Post()
    @ApiOkResponse({ description: USER_REGISTER, status: HttpStatus.OK, })
    @ApiConflictResponse({ description: USER_CONFLICT, status: HttpStatus.CONFLICT })
    register(@Body() userDTO: UserDTO): Promise<string> {
        return this.userService.register(userDTO);
    }

    /**
     * login user
     * @param loginDTO loginDTO
     * @returns token value
     */
    @ApiOkResponse({ description: USER_LOGIN, status: HttpStatus.OK, })
    @ApiNotFoundResponse({ description: USER_NOT_FOUND, status: HttpStatus.NOT_FOUND, })
    @ApiInternalServerErrorResponse({ description: USER_FAILED_LOGIN, status: HttpStatus.INTERNAL_SERVER_ERROR, })
    @Post('/login')
    logIn(@Body() loginDTO: LoginDTO): Promise<{ token }> {
        this.logger.log(USER_LOGIN)
        return this.userService.logIn(loginDTO)
    }

    // /**
    //  * getting all users
    //  * @returns fetech users
    //  */
    // @Roles(Role.User)
    // @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard)
    // @UseInterceptors(CacheInterceptor)
    // @ApiOkResponse({ description: USER_FETCH, status: HttpStatus.OK })
    // @ApiInternalServerErrorResponse({ description: USER_FAILED_FETCH, status: HttpStatus.INTERNAL_SERVER_ERROR })
    // @Get()
    // bookingHistory(): Promise<UserDTO[]> {
    //     this.logger.log(USER_FETCH)
    //     return this.userService.bookingHistory()
    // }
}
