import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';
import { UsersRepository } from 'src/users/users.repository';
import { SlotsController } from './slots.controller';
import { Slots } from './slots.entity';
import { SlotsRepository } from './slots.repository';
import { SlotsService } from './slots.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Slots,SlotsRepository,Users, UsersRepository])],
  controllers: [SlotsController],
  providers: [SlotsService]
})
export class SlotsModule {}
