import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs-extra';
import jwtDecode from 'jwt-decode';
import * as path from 'path';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger('HTTP');
    private statusCode = 0;
    private folderName = '';
    private loggerText = '';
    private jwtToken: string | undefined = undefined;

    use(request: Request, response: Response, next: NextFunction): void {
        const { ip, method, originalUrl } = request;
        const userAgent = request.get('user-agent') || '';
        this.jwtToken = request.headers['authorization'];

        response.on('finish', () => {
            const { statusCode, statusMessage } = response;
            this.statusCode = statusCode;
            const contentLength = response.get('content-length');

            this.print(request);
            this.loggerFiles();

            //decode the jwt token
            const userId = this.getUserIdByJwtToken();

            this.loggerText = `${method} ${originalUrl} ${statusCode} - ${statusMessage} -  ${contentLength} - ${userAgent} ${ip} ${
                userId ? '- ' + userId : ''
            }`;

            this.writeFileLog();
            this.loggers();
        });

        next();
    }

    getUserIdByJwtToken() {
        if (this.jwtToken) {
            const token = this.jwtToken.split('Bearer ');
            if (token.length > 0) {
                if (token[1]) {
                    const tokenCrypt: any = jwtDecode(token[1]);
                    return tokenCrypt.customerId;
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    }

    print(request: Request) {
        const { params, query, body } = request;

        if (Object.keys(params).length) {
            console.log('Params:', params);
        }
        if (Object.keys(query).length) {
            console.log('Query:', query);
        }
        if (Object.keys(body).length) {
            console.log('Body:', body);
        }
    }

    loggerFiles() {
        if (this.statusCode === 401) {
            this.folderName = path.join(process.cwd(), process.env.APP_AUTH_LOG as string);
        } else if (this.statusCode >= 400 && this.statusCode !== 401) {
            this.folderName = path.join(process.cwd(), process.env.APP_ERROR_LOG as string);
        } else {
            this.folderName = path.join(process.cwd(), process.env.APP_ACCESS_LOG as string);
        }
    }

    loggers() {
        if (this.statusCode >= 400) {
            this.logger.error(this.loggerText);
        } else {
            this.logger.log(this.loggerText);
        }
    }

    writeFileLog() {
        const writeFileLog = new Date(Date.now()).toLocaleString() + ' - ' + this.loggerText;

        fs.createFileSync(`${this.folderName}`);
        fs.appendFileSync(`${this.folderName}`, writeFileLog + '\r\n');
    }
}
