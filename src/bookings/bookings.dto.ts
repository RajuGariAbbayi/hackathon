import { IsNotEmpty, IsString } from "class-validator";

export class BookingsDTO {

    id: number;

    @IsNotEmpty({message:'status can`t be empty'})
    @IsString()
    status: string;

    @IsNotEmpty()
    @IsString()
    date: string;

    @IsNotEmpty()
    @IsString()
    startTime: string;

    @IsNotEmpty()
    @IsString()
    endTime: string;

    @IsNotEmpty()
    @IsString()
    reason: string;
}