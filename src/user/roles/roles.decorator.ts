import { SetMetadata } from '@nestjs/common';
import { Role } from '../role';

/**
 * Roles class
 */
export const ROLES_KEY = 'roles';
/**
 * custom decorator
 * @param roles Role as user and doctor
 * @returns decorator
 */
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);