import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from '../role';
import { ROLES_KEY } from '../roles/roles.decorator';

/**
 * RolesGuard
 */
@Injectable()
export class RolesGuard implements CanActivate {
    /**
     * dependency Injection
     * @param reflector Reflector
     */
    constructor(private reflector: Reflector) { }
    /**
     * role based authentication
     * @param context handle
     * @returns role
     */
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => user.role?.includes(role));
    }
}