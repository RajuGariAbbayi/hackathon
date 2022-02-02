import { DoctorRepository } from './doctor dto/doctor.repository';
import { JwtStrategy } from './jwt/jwt.strategy';
import { PassportModule, PassportStrategy } from '@nestjs/passport';
import { UserRepository } from './user.repository';
import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user dto/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { Doctor } from './doctor dto/doctor.entity';
/**
 * User Module 
 */
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topSecretKey',
      signOptions: {
        expiresIn: '120s',
      },
    }),
    // CacheModule.register({
    //   ttl: 100
    // }),
    TypeOrmModule.forFeature([User, UserRepository, Doctor, DoctorRepository])],
  exports: [JwtStrategy],
  controllers: [UserController],
  providers: [UserService, JwtStrategy]
})
export class UserModule { }
