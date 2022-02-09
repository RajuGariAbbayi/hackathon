import { Bookings } from 'src/bookings/bookings.entity';
import { BookingsService } from './bookings.service';
import { Test, TestingModule } from '@nestjs/testing';
import { BookingsController } from './bookings.controller';
import { plainToInstance } from 'class-transformer';
import { BookingsDTO } from './bookings.dto';

const bookingData = {
  date: "08-02-2022",
  startTime: "10:10AM",
  endTime: "10:30AM",
  reason: "fever",
  slots: 1,
  users: 1
}

const bookingsImportDTO = plainToInstance(BookingsDTO, bookingData)

describe('BookingsController', () => {
  let controller: BookingsController;
  let service: BookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingsController],
      providers: [BookingsService, {
        provide: BookingsService,
        useFactory: () => ({
          addNewBookings: jest.fn()
        })
      }]
    }).compile();

    controller = module.get<BookingsController>(BookingsController);
    service = module.get<BookingsService>(BookingsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('When addNewBookings()', () => {
    it('should return response', async () => {
      let getAllProductSpy = jest.spyOn(service, 'addNewBookings').mockResolvedValue('booked appoinment successful');
      let response = await service.addNewBookings(bookingsImportDTO);
      expect(response).toEqual('booked appoinment successful');
      expect(getAllProductSpy).toHaveBeenCalled()
      expect(getAllProductSpy).toHaveBeenCalledTimes(1);
    })
  })
});
