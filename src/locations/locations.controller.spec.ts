import { Locations } from 'src/locations/locations.entity';
import { LocationsDTO } from './locations.dto';
import { plainToInstance } from 'class-transformer';
import { LocationsService } from './locations.service';
import { Test, TestingModule } from '@nestjs/testing';
import { LocationsController } from './locations.controller';

let locations = {
  cityName: "banglore",
  contactPerson: "suresh",
  phoneNumber: "123456789",
  visit: "offline",
  hospital: "apollo"
}

let locationsSearch: any = {
  id: 1,
  cityName: "banglore",
  contactPerson: "suresh",
  phoneNumber: "123456789",
  visit: "offline",
  hospital: "apollo"
}
/**
 * locations imported
 */
const locatinsImportDTO = plainToInstance(LocationsDTO, locations);

describe('LocationsController', () => {
  let controller: LocationsController;
  let service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationsController],
      providers: [LocationsService, {
        provide: LocationsService,
        useFactory: () => ({
          addNewLocations: jest.fn(),
          listOfLocations: jest.fn()
        })
      }]
    }).compile();

    controller = module.get<LocationsController>(LocationsController);
    service = module.get<LocationsService>(LocationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('When addNewLocations()', () => {
    it('should return response', async () => {
      let postLocationsSpy = jest.spyOn(service, 'addNewLocations').mockResolvedValue('locations added successful');
      let response = await service.addNewLocations(locatinsImportDTO);
      expect(response).toEqual('locations added successful');
      expect(postLocationsSpy).toHaveBeenCalled()
      expect(postLocationsSpy).toHaveBeenCalledTimes(1);
    })
  })
  describe('When listOfLocations()', () => {
    it('should return response', async () => {
      let listOfLocationsSpy = jest.spyOn(service, 'listOfLocations').mockResolvedValue(locationsSearch as Locations[]);
      let response = await service.listOfLocations();
      expect(response).toEqual(locationsSearch);
      expect(listOfLocationsSpy).toHaveBeenCalled()
      expect(listOfLocationsSpy).toHaveBeenCalledTimes(1);
    })
  })
});
