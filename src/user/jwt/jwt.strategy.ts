import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from '../user.repository';
import { JwtPayload } from './jwt-payload.interface';
/**
 * Jwtstrategy 
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Repo for data base configuration
   * @param userRepository secretKey
   */
  constructor(private userRepository: UserRepository) {
    super({
      secretOrKey: 'topSecretKey',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }
  /**
   * authorization
   * @param payload
   * @returns feteching and validating user
   */
  async validate(payload: JwtPayload) {
    try {
      const response = this.userRepository.findOneOrFail({
        emailId: payload.emailId,
      });
      console.log(response);
      return response;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}