import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

/**
 * JwtAuthGuard for authorization
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){}