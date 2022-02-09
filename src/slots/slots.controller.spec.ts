import { SlotsDTO } from './slots.dto';
import { plainToInstance } from 'class-transformer';
import { SlotsService } from './slots.service';
import { Test, TestingModule } from '@nestjs/testing';
import { SlotsController } from './slots.controller';

const slots = {
  startTime: "9am",
  endTime: "4pm",
  hospital: "apollo",
  users: 1,
  locations: 1
}

const slotsSearch = {
  id:1,
  startTime: "9am",
  endTime: "4pm",
  hospital: "apollo",
  users: 1,
  locations: 1
}

const slotsImportDTO = plainToInstance(SlotsDTO, slots)

describe('SlotsController', () => {
  let controller: SlotsController;
  let service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SlotsController],
      providers: [SlotsService, {
        provide: SlotsService,
        useFactory: () => ({
          addNewSlots: jest.fn(),
          listOfSlots: jest.fn()
        })
      }]
    }).compile();

    controller = module.get<SlotsController>(SlotsController);
    service = module.get<SlotsService>(SlotsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('When addNewSlots()', () => {
    it('should return response', async () => {
      let addNewSlotsSpy = jest.spyOn(service, 'addNewSlots').mockResolvedValue('slot added successful');
      let response = await service.addNewSlots(slotsImportDTO);
      expect(response).toEqual('slot added successful');
      expect(addNewSlotsSpy).toHaveBeenCalled()
      expect(addNewSlotsSpy).toHaveBeenCalledTimes(1);
    })
  })

  describe('When listOfSlots()', () => {
    it('should return response', async () => {
      let addNewSlotsSpy = jest.spyOn(service, 'listOfSlots').mockResolvedValue(slotsSearch);
      let response = await service.listOfSlots();
      expect(response).toEqual(slotsSearch);
      expect(addNewSlotsSpy).toHaveBeenCalled()
      expect(addNewSlotsSpy).toHaveBeenCalledTimes(1);
    })
  })
  
});
