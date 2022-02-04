import { SlotsService } from "./slots.service";
import { TestingModule, Test } from "@nestjs/testing";
import { SlotsRepository } from "./slots.repository";
import { HttpException } from "@nestjs/common";


/**
 * Mock Response 
 */

const addSlotsSuccess =`Slot Added successfully with Id :`;

export const slots=
{
    id: 1,
    doctor:'Amogh',
    startTime: '10am',
    endTime: '12am',
    status:''
}


/**
 * Test for Slots Service
 */
describe('SlotsService', () => {
    let slotsService: SlotsService;
    let slotsRepo;

    beforeEach(async () => {
        let module: TestingModule = await Test.createTestingModule({
            providers: [SlotsService, {
                provide: SlotsRepository,
                useFactory: () => ({
                    addSlots: jest.fn(),
                    listOfslots: jest.fn(),
                })
            }]
        }).compile();
        slotsService = module.get<SlotsService>(SlotsService);
        slotsRepo = module.get<SlotsRepository>(SlotsRepository);
    });
   it("should be defined", () => {
        expect(slotsService).toBeDefined();
    });

     /**
      *Test for add Slots
      */
    describe("When addSlots()", () => {
        describe("AND success", () => {
            it("should return response", async () => {
                let addSlotsSpy = jest.spyOn(slotsRepo, 'addSlots').mockResolvedValue(addSlotsSuccess);
                let response = await slotsService.addSlots(slots);
                expect(response).toEqual(addSlotsSuccess);
                expect(addSlotsSpy).toHaveBeenCalled();
                expect(addSlotsSpy).toHaveBeenCalledTimes(1);
            })
        })
        describe("AND Failed", () => {
            it("should return error", async () => {
                let addSlotsSpy = jest.spyOn(slotsRepo, 'addSlots').mockRejectedValue(new Error ('Unable to add slots'));
                let response = await slotsService.addSlots(slots);
                expect(response).rejects.toThrow(HttpException);
                expect(addSlotsSpy).toHaveBeenCalled();
            })
        })
    })


    /**
     *List Of slots
     */
    describe("When listOfslots()", () => {
        describe("AND success", () => {
            it("should return response", async () => {
                let getAccountByIdSpy = jest.spyOn(slotsRepo, 'listOfslots').mockResolvedValue(slots);
                let response = await slotsService.listOfslots(1);
               expect(response).toEqual(slots);
                expect(getAccountByIdSpy).toHaveBeenCalled();
                expect(getAccountByIdSpy).toHaveBeenCalledTimes(1);
            })
        })
        describe("AND Failed", () => {
            it("should return error", async () => {
                let listOfslotsSpy = jest.spyOn(slotsRepo, 'listOfslots').mockRejectedValue(new Error('No slots available')
                );
                //let response = await slotsService.listOfslots(1);
                //expect(response).rejects.toThrow(HttpException);
                expect(listOfslotsSpy).toHaveBeenCalled();
            })
        })
    })

    


})

