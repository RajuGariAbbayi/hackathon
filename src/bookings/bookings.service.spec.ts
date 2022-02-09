import { BookingsRepository } from './bookings.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { BookingsService } from './bookings.service';
import { plainToInstance } from 'class-transformer';
import { BookingsDTO } from './bookings.dto';
import { HttpException } from '@nestjs/common';
import { Bookings } from './bookings.entity';

jest.mock('bcryptjs');

const bookingData: any = {
  id: 1,
  date: "08-02-2022",
  startTime: "10:10AM",
  endTime: "10:30AM",
  reason: "fever",
  slots: 1,
  users: 1
}

const ofImportDto = plainToInstance(BookingsDTO, bookingData);

describe('BookingsService', () => {
  let service: BookingsService;
  let repository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookingsService, {
        provide: BookingsRepository,
        useFactory: () => ({
          save: jest.fn()
        })
      }],
    }).compile();

    service = module.get<BookingsService>(BookingsService);
    repository = module.get<BookingsRepository>(BookingsRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe("When addNewBookings()", () => {
    describe('AND Success', () => {
      it('should return response', async () => {
        const responseMsg = 'Bookings added Successfully'
        const findOneSpy = jest.spyOn(repository, 'save').mockResolvedValue(ofImportDto);
        const response = await service.addNewBookings(bookingData as Bookings);
        expect(response).toEqual(responseMsg);
        expect(findOneSpy).toHaveBeenCalled();
      })
    })
    describe('AND Failed', () => {
      it('should return error', async () => {
        const data = ofImportDto[0];
        const msg = 'Unable to fetch bookings details'
        const findOneSpy = jest.spyOn(repository, 'save').mockRejectedValue(new Error(msg));
        await expect(service.addNewBookings(bookingData as Bookings)).rejects.toThrow(HttpException);
        expect(findOneSpy).toHaveBeenCalledTimes(1);
      })
    })
  })
});
