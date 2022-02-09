import { Injectable } from '@nestjs/common';

/**
 * It will insert/update/delete/retrieve app information in the database/repository
 * @author suryakumarraju
 */
@Injectable()
export class AppService {

  /**
   * Fetch the data 
   * @returns 
   */
  getHello(): string {
    return 'Hello World!';
  }
}
