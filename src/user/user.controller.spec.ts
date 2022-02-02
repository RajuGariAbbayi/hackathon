import { Test } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { UserDTO } from './user dto/user.dto';
import { UserController } from './user.controller';
import { UserService } from './user.service';

const user = {
    id: 1,
    name: "surya",
    emailId: "surya@hcl.com",
    phoneNumber: 9542285999,
    password: "1234sdfgwsdfv23456yuytfdfbn",
    age: 24,
    gender: "male",
    ssn: "asd123434"
}

const ImportDto = plainToInstance(UserDTO, user)

describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;
    beforeEach(async () => {
        let module = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService, {
                provide: UserService,
                useFactory: () => ({
                    registerUser: jest.fn(),
                    loginUsers: jest.fn(),
                    listOfUsers: jest.fn(),
                    myBooks: jest.fn()
                })
            }]
        }).compile();

        userController = module.get<UserController>(UserController);
        userService = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
        expect(UserController).toBeDefined();
    })

    describe('When registerUser()', () => {
        it('should return response', async () => {
            let findOneSpy = jest.spyOn(userService, 'register').mockResolvedValue('register succesful');
            let response = await userController.register(ImportDto);
            expect(response).toEqual('register succesful');
            expect(findOneSpy).toHaveBeenCalled()
        })
    })

});
