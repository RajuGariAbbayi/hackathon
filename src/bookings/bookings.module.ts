import { BookingsRepository } from './bookings.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { Bookings } from './bookings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bookings, BookingsRepository])],
  providers: [BookingsService],
  controllers: [BookingsController]
})
export class BookingsModule { }
