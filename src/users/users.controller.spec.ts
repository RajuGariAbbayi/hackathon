import { Doctors } from './doctors/doctors.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { UsersDTO } from './users.dto';
import { Users } from './users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DoctorsDTO } from './doctors/doctors.dto';
import { LoginDTO } from './login.dto';

/**
 * user testing
 */
const user = {
  name: "surya",
  emailId: "surya@hcl.com",
  password: "surya",
  phoneNumber: 123456789,
  age: 24,
  ssn: 12345,
  gender: "male"
}

const doctor = {
  experience: "5 years",
  education: "MBBS",
  specialization: "ortho",
  description: "knowledgable",
  rating: 4,
  consultationFee: 400,
  location: "pune",
  user: {
    id: 1
  }
}

const gethistory = {
  id: 1,
  name: "surya",
  emailId: "surya@hcl.com",
  phoneNumber: 123456789,
  bookings: {
    id: 1,
    date: "08-02-2022",
    startTime: "10:10AM",
    endTime: "10:30AM",
    reason: "fever",
    slots: 1
  }
}
/**
 * importing userDTO
 */
const userImportDTO = plainToInstance(UsersDTO, user)

/**
 * import doctorDto
 */
const DoctorImportDTO = plainToInstance(DoctorsDTO, doctor)

describe('Given users', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        {
          provide: UsersService,
          useFactory: () => ({
            register: jest.fn(),
            loginUser: jest.fn(),
            getUserById: jest.fn(),
          }),
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });
  it('should be defined', () => {
    expect(UsersController).toBeDefined();
  });

  describe('When register', () => {
    it('should return response', async () => {
      const message = 'Success';

      const addUsersSpy = jest.spyOn(usersService, 'register').mockResolvedValue(message);
      const response = await usersController.register(userImportDTO);
      expect(response).toEqual(message);
      expect(addUsersSpy).toHaveBeenCalled();
      expect(addUsersSpy).toHaveBeenCalledTimes(1);
    });
  });

  // describe('When registerDoctor', () => {
  //   it('should return response', async () => {
  //     const message = 'Success';
  //     const addUsersSpy = jest.spyOn(usersService, 'registerDoctor').mockResolvedValue(message);
  //     const response = await usersController.registerDoctor(DoctorImportDTO);
  //     expect(response).toEqual(message);
  //     expect(addUsersSpy).toHaveBeenCalled();
  //     expect(addUsersSpy).toHaveBeenCalledTimes(1);
  //   });
  // });

  // describe('When logIn', () => {
  //   it('should return response', async () => {
  //     const token = { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoic3VyeWFAaGNsLmNvbSIsImlhdCI6MTY0NDEzMTUxMSwiZXhwIjoxNjQ0MTMyMTExfQ.inaxeAzrdl-czKCcdu8K7HHLSHzJjbWi9XsUMg4N23M' };
  //     const login = {
  //       emailId: 'surya@hcl.com',
  //       password: 'surya'
  //     }
  //     const getAllHotelsSpy = jest.spyOn(usersService, 'logIn').mockResolvedValue(token);
  //     const response = await usersController.logIn(login);
  //     expect(response).toEqual(token);
  //     expect(getAllHotelsSpy).toHaveBeenCalled();
  //     expect(getAllHotelsSpy).toHaveBeenCalledTimes(1);
  //   });
  // });
  // describe('When getmedicalHistory()', () => {
  //   it('should return response', async () => {
  //     const getHotelByPlaceSpy = jest.spyOn(usersService, 'getmedicalHistory').mockResolvedValue(gethistory);
  //     const response = await usersController.getmedicalHistory(1);
  //     expect(response).toEqual(gethistory);
  //     expect(getHotelByPlaceSpy).toHaveBeenCalled();
  //     expect(getHotelByPlaceSpy).toHaveBeenCalledTimes(1);
  //   });
  // });
});
