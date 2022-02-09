import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LocationsModule } from './locations/locations.module';
import { SlotsModule } from './slots/slots.module';
import { BookingsModule } from './bookings/bookings.module';
import { UsersModule } from './users/users.module';

/**
 * @module Core Module
 */
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, LocationsModule, SlotsModule, BookingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
