import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * app Controller includes handler fro CRUD operation
 * @author: suryakumarraju
 */
@Controller()
export class AppController {

  /**
   * Dependency Injection
   * @param appService appservice
   */
  constructor(private readonly appService: AppService) {}
  
  /**
   * Fetching the static data
   * @returns string
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
