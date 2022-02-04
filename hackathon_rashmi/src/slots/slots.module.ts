import { TypeOrmModule } from "@nestjs/typeorm";
import { SlotsRepository } from "./slots.repository";
import { Slots } from "./slots.entity";
import { SlotsController } from "./slots.controller";
import { SlotsService } from "./slots.service";
import { Module } from "@nestjs/common";

/**
 * @author Rashmi Gupta
 * @Module Users Module
 *imported Modules -PassportModule,JwtModule,TypeOrmModule
 */
@Module({ 
    imports: [TypeOrmModule.forFeature([SlotsRepository,Slots])
    ],
    controllers: [SlotsController],
    providers: [SlotsService]
})
export class SlotsModule { }    