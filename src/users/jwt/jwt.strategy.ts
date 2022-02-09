import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersRepository } from "../users.repository";
import { JwtPayload } from "./jwt-payload.interface";

/**
 * For Jwtstartegy
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    /**
     * Dependency Injection
     * @param userRepository 
     */
    constructor(private usersRepository: UsersRepository) {
        super({
            secretOrKey: 'SecretKey',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }

    /**
     * Validate the Jwtpayload
     * @param payload 
     * @returns 
     */
    async validate(payload: JwtPayload) {
        try {
            let response = this.usersRepository.findOneOrFail({ emailId: payload.emailId });
            console.log(response)
            return response;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.UNAUTHORIZED)

        }
    }
}