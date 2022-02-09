import { CacheModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctors } from './doctors/doctors.entity';
import { DoctorRepository } from './doctors/doctors.repository';
import { RolesGuard } from './guards/roles.guard';
import { JwtStrategy } from './jwt/jwt.strategy';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'SecretKey',
      signOptions: {
        expiresIn: '600s'
      }
    }),
    TypeOrmModule.forFeature([Users, UsersRepository, Doctors, DoctorRepository])],
  exports: [JwtStrategy],
  controllers: [UsersController],
  providers: [UsersService, JwtStrategy]
})
export class UsersModule { }
