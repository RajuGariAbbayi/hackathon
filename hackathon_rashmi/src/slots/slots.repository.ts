import { Slots } from "./slots.entity";
import { EntityRepository, Repository } from "typeorm";

/**
 * Slots Repository
 */
@EntityRepository(Slots)
export class SlotsRepository extends Repository<Slots>{ } 