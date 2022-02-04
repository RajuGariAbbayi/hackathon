import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { SlotsModule } from './slots/slots.module';

/**
 * AppModule(Root Module)
 */
@Module({
  imports: [TypeOrmModule.forRoot(),UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
 