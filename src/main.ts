import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import { HttpExceptionFilter } from 'filters/http-exception.filter';
import { WrapResponseInterceptor } from 'interceptors/wrap-response.interceptor';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());

    app.use(
        ['/api'],
        basicAuth({
            challenge: true,
            users: {
                [process.env.SWAGGER_USER ? process.env.SWAGGER_USER : '']: process.env
                    .SWAGGER_PASSWORD
                    ? process.env.SWAGGER_PASSWORD
                    : '',
            },
        }),
    );
    const config = new DocumentBuilder()
        .setTitle('E-commerce')
        .setDescription('The cats API description')
        .setLicense('Nazmul Haque', 'https://nazmulhaque.netlify.app/')
        .setVersion('1.0')
        .addTag('e-commerce')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'JWT',
                description: 'Enter JWT token',
                in: 'header',
            },
            'jwt',
        )
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.useGlobalInterceptors(new WrapResponseInterceptor());
    app.useGlobalFilters(new HttpExceptionFilter());

    await app.listen(+(process.env.PORT as string), () =>
        console.log(`http://${process.env.HOST}:${process.env.PORT}`),
    );
}
bootstrap();
