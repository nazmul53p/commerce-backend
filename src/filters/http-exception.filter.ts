import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs-extra';
import jwtDecode from 'jwt-decode';
import * as path from 'path';

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException> implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();
        const exceptionResponse: any = exception.getResponse();
        const request = ctx.getRequest();
        const isDebug = request.headers['debug'];
        const error_message =
            typeof exceptionResponse.message === 'string'
                ? exceptionResponse.message
                : exceptionResponse;

        if (isDebug) {
            const folderName = path.join(process.cwd(), process.env.APP_DEBUG_LOG as any);
            const { ip, method, originalUrl } = request;
            const userAgent = request.get('user-agent') || '';
            const bearerToken = request.headers['authorization'];
            const contentLength = response.get('content-length');
            let userId = undefined;
            if (bearerToken) {
                const spBearerToken = bearerToken.split('Bearer ');
                if (spBearerToken && spBearerToken[1] != '') {
                    const btk: any = jwtDecode(spBearerToken[1]);
                    userId = btk.user_id;
                }
            }
            const loggerText = `${new Date(
                Date.now(),
            ).toLocaleString()} - ${method} ${originalUrl} ${
                request.statusCode
            } - ${error_message} -  ${contentLength} - ${userAgent} ${ip} - ${userId}`;

            fs.createFileSync(`${folderName}`);
            fs.appendFileSync(`${folderName}`, loggerText + '\r\n');
        }

        response.status(status).json({
            statusCode: status,
            message: Object.keys(error_message).length > 0 ? error_message.message : error_message,
            error: true,
            timestamp: new Date(),
            path: request.url,
        });
    }
}
