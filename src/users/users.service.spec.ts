import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcryptjs';
import { plainToInstance } from 'class-transformer';
import { UsersDTO } from './users.dto';
import { HttpException } from '@nestjs/common';
import { Users } from './users.entity';

jest.mock('bcryptjs');
/**
 * User
 */
let users = {
  id: 1,
  name: "surya",
  emailId: "surya@hcl.com",
  password: "surya",
  phoneNumber: 123456789,
  age: 24,
  ssn: 12345,
  gender: "male"
}

const res = {
  id: 1,
  experience: "5 years",
  education: "MBBS",
  specialization: "ortho",
  description: "knowledgable",
  rating: 4,
  consultationFee: 400,
  location: "pune",
  users: {
    id: 1
  }
}

const ofImportDto = plainToInstance(UsersDTO, users);

describe('UserService', () => {
  let bcryptCompare: jest.Mock;
  let userService: UsersService;
  let userRepo;
  beforeEach(async () => {
    bcryptCompare = jest.fn().mockReturnValue(true);
    (bcrypt.compare as jest.Mock) = bcryptCompare;
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: JwtService,
          useFactory: () => {
            sign: jest.fn();
          },
        },
        UsersService,
        {
          provide: UsersRepository,
          useFactory: () => ({
            find: jest.fn(),
            findOneOrFail: jest.fn(),
            save: jest.fn(),
          }),
        },
      ],
    }).compile();

    userService = module.get<UsersService>(UsersService);
    userRepo = module.get<UsersRepository>(UsersRepository);
  });
  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  describe('When register()', () => {
    describe('AND Success', () => {
      it('should return response', async () => {
        const data = ofImportDto[0];
        const res = `User registered successfully by this id:${data.id}`;
        const findOneSpy = jest.spyOn(userRepo, 'save').mockResolvedValue({ id: 1, ...data });
        const response = await userService.register(data);
        expect(response).toEqual(res);
        expect(findOneSpy).toHaveBeenCalled();
      });
    });
    describe('AND failed', () => {
      it('should return error', async () => {
        const data = ofImportDto[0];
        const findOneSpy = jest.spyOn(userRepo, 'save').mockRejectedValue(new Error('Unable to register , please try again later'));
        await expect(userService.register(data)).rejects.toThrow(HttpException);
        expect(findOneSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
