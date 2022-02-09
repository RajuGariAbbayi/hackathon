import { LocationsRepository } from './locations.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { LocationsService } from './locations.service';
import { plainToInstance } from 'class-transformer';
import { LocationsDTO } from './locations.dto';
import { Locations } from './locations.entity';
import { HttpException } from '@nestjs/common';

let locations: any = {
  id: 1,
  cityName: "banglore",
  contactPerson: "suresh",
  phoneNumber: "123456789",
  visit: "offline",
  hospital: "apollo"
}
const ofImportDto = plainToInstance(LocationsDTO, locations);

describe('LocationsService', () => {
  let service: LocationsService;
  let repository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationsService, {
        provide: LocationsRepository,
        useFactory: () => ({
          save: jest.fn(),
          find: jest.fn()
        })
      }],
    }).compile();

    service = module.get<LocationsService>(LocationsService);
    repository = module.get<LocationsRepository>(LocationsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("When addNewLocations()", () => {
    describe('AND Success', () => {
      it('should return response', async () => {
        const responseMsg = `Locations added Successfully with id : ${locations.id}`
        const findOneSpy = jest.spyOn(repository, 'save').mockResolvedValue(ofImportDto);
        const response = await service.addNewLocations(locations as Locations);
        expect(response).toEqual(responseMsg);
        expect(findOneSpy).toHaveBeenCalled();
      })
    })
    describe('AND Failed', () => {
      it('should return error', async () => {
        const findOneSpy = jest.spyOn(repository, 'save').mockRejectedValue(new Error('Unable to post location details'));
        await expect(service.addNewLocations(locations as Locations)).rejects.toThrow(HttpException);
        expect(findOneSpy).toHaveBeenCalledTimes(1);
      })
    })
  })

  describe("When listOfLocations()", () => {
    describe('AND Success', () => {
      it('should return response', async () => {
        const findOneSpy = jest.spyOn(repository, 'find').mockResolvedValue(ofImportDto);
        const response = await service.listOfLocations();
        expect(response).toEqual(ofImportDto);
        expect(findOneSpy).toHaveBeenCalled();
      })
    })
    describe('AND Failed', () => {
      it('should return error', async () => {
        const findOneSpy = jest.spyOn(repository, 'find').mockRejectedValue(new Error('Unable to fetch list of Locations'));
        await expect(service.listOfLocations()).rejects.toThrow(HttpException);
        expect(findOneSpy).toHaveBeenCalledTimes(1);
      })
    })
  })
});
