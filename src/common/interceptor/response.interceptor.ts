import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

/**
 * returns the output according your wish using data & statusCode
 */
@Injectable()
export class ResponseInterceptor implements NestInterceptor{
    /**
     * Interceptor
     * @param context 
     * @param next 
     * @returns data,statusCode, response
     * 
     */
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        let statusCode = context.switchToHttp().getResponse().statusCode;
        let response = next.handle().pipe(map(data => {
            return {
                data,
                statusCode,
                time: new Date().toISOString()
            }
        }))
        return response;
    }
}