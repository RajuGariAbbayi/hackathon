import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationsController } from './locations.controller';
import { Locations } from './locations.entity';
import { LocationsRepository } from './locations.repository';
import { LocationsService } from './locations.service';

@Module({
  imports:[
    CacheModule.register({
      ttl:60
    }),
    TypeOrmModule.forFeature([Locations,LocationsRepository])],
  controllers: [LocationsController],
  providers: [LocationsService]
})
export class LocationsModule {}
