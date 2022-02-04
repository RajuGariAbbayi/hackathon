import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./users.entity";
import { UsersRepository } from "./users.repository";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";

/**
 * @author Rashmi Gupta
 * @Module Users Module
 *imported Modules -PassportModule,JwtModule,TypeOrmModule
 */
@Module({ 
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: process.env.JWT_SECRET,
                signOptions: {
                    expiresIn: '1d'
                }
            })
        }),
        TypeOrmModule.forFeature([Users, UsersRepository])
    ],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule { } 