import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Request, Response} from 'express';
/**
 * used to handle all unhandled exception
 */
@Catch()
export class ExceptionExceptionFilter implements ExceptionFilter{
    /**
     * we create our own Exception hierarchy
     * @param exception displays exception output
     * @param host ArgumentHost is used to get desired req and res
     * @returns if error occurs returns the statuscode,message,url along with IST
     */
    catch(exception: any, host: ArgumentsHost) {
        let ctx = host.switchToHttp();
        let request = ctx.getRequest<Request>();
        let response = ctx.getResponse<Response>();
        let status = exception.getStatus();
        return response.status(status).json({
            statusCode:status,
            data:null,
            message:exception?.response,
            url: request.url,
            time: new Date().toISOString()
        })
    }
}