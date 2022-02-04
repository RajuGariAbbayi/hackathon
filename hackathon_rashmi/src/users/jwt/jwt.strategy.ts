import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "./jwt-payload.interface";
import { UsersRepository } from "../users.repository";

/**
 * @author Rashmi Gupta
 * JwtStrategy
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    /**
     * Dependency -UserRepository
     * @param userRepo userRepo
     */
    constructor(private userRepo: UsersRepository) {
        super({
            secretOrKey: process.env.JWT_SECRET,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    /**
     * payload Validation
     * @param payload payload
     * @returns response
     */
    async validate(payload: JwtPayload) {
        try {
            let response = this.userRepo.findOneOrFail({ emailId: payload.emailId });
            return response;
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.UNAUTHORIZED)
        }
    }

}
