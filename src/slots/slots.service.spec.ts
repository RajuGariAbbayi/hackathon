import { UsersModule } from './../users/users.module';
import { SlotsRepository } from './slots.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { SlotsService } from './slots.service';
import { plainToInstance } from 'class-transformer';
import { SlotsDTO } from './slots.dto';
import { Slots } from './slots.entity';
import { HttpException } from '@nestjs/common';
import { UsersRepository } from '../users/users.repository';
import { UsersService } from '../users/users.service';

const slotsData: any = {
  id: 1,
  startTime: "9am",
  endTime: "4pm",
  hospital: "apollo",
  users: 1,
  locations: 1
}

const slotData: any = {
  startTime: "9am",
  endTime: "4pm",
  hospital: "apollo",
  users: 1,
  locations: 1
}

const ofImportDto = plainToInstance(SlotsDTO, slotsData);

const ofImportDTO = plainToInstance(SlotsDTO, slotData);

describe('SlotsService', () => {
  let service: SlotsService;
  let repository;
  let user;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SlotsService, {
          provide: SlotsRepository,
          useFactory: () => ({
            save: jest.fn(),
            find: jest.fn()
          })
        }, UsersService, {
          provide: UsersRepository,
          useFactory: () => ({
            save: jest.fn(),
            find: jest.fn(),
            patch: jest.fn()
          })
        }],
    }).compile();
    user = module.get<UsersModule>(UsersModule);
    service = module.get<SlotsService>(SlotsService);
    repository = module.get<SlotsRepository>(SlotsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe("When addNewSlots()", () => {
    describe('AND Success', () => {
      it('should return response', async () => {
        const responseMsg = `slots added Successfully with id : ${slotData.id}`
        const findOneSpy = jest.spyOn(repository, 'save').mockResolvedValue(ofImportDTO);
        const response = await service.addNewSlots(slotsData as Slots);
        expect(response).toEqual(responseMsg);
        expect(findOneSpy).toHaveBeenCalled();
      })
    })
    describe('AND Failed', () => {
      it('should return error', async () => {
        const msg = 'Unable to fetch slots details'
        const findOneSpy = jest.spyOn(repository, 'save').mockRejectedValue(new Error(msg));
        await expect(service.addNewSlots(slotsData as Slots)).rejects.toThrow(HttpException);
        expect(findOneSpy).toHaveBeenCalledTimes(1);
      })
    })
  })

  describe("When listOfSlots()", () => {
    describe('AND Success', () => {
      it('should return response', async () => {
        const findOneSpy = jest.spyOn(repository, 'find').mockResolvedValue(ofImportDto);
        const response = await service.listOfSlots();
        expect(response).toEqual(ofImportDto);
        expect(findOneSpy).toHaveBeenCalled();
      })
    })
    describe('AND Failed', () => {
      it('should return error', async () => {
        const findOneSpy = jest.spyOn(repository, 'find').mockRejectedValue(new Error('Unable to fetch list of slots'));
        await expect(service.listOfSlots()).rejects.toThrow(HttpException);
        expect(findOneSpy).toHaveBeenCalledTimes(1);
      })
    })
  })
});