import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//global response interceptor interface
export interface Response<T> {
    statusCode: number;
    message: string;
    data: T;
    error: boolean;
}

@Injectable()
export class WrapResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            map((data) => {
                console.log(data);
                return {
                    statusCode: context.switchToHttp().getResponse().statusCode,
                    message: data.message,
                    data: data,
                    error: false,
                };
            }),
        );
    }
}
