import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Response Interceptor
 */
export interface Response<T> {

  /**
   * Data
   */
  data: T;
}
/**
 * ResponseInterceptor
 */
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  
  /**
   * Interceptor
   * @param context ExecutionContext
   * @param next CallHandler
   * @returns Response
   */
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(map(data => ({ data })));
  }
}