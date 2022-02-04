import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

/**
 * @author Rashmi Gupta
 * JwtAuthGuard For Authentication
 */
@Injectable()
export class JwtAuthGard extends AuthGuard('jwt') { }