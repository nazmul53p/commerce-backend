import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule as ConfigModules } from '@nestjs/config';
import { AuthModule } from 'auth/auth.module';
import { configuration } from 'config/configuration';
import { KnexErrorModule } from 'knexerrors';
import { LoggerMiddleware } from 'middlewares/logs.middleware';
import { CustomerModule } from 'modules/customer/customer.module';
import { EmployeeModule } from 'modules/employee/employee.module';
import { OrderDetailsModule } from 'modules/order-details/order-details.module';
import { OrdersModule } from 'modules/orders/orders.module';
import { ProductModule } from 'modules/product/product.module';
import { ShippersModule } from 'modules/shippers/shippers.module';
import { SuppliersModule } from 'modules/suppliers/suppliers.module';
import { KnexModule } from 'nest-knexjs';
import { CategoryModule } from './modules/category/category.module';

@Module({
    imports: [
        ConfigModules.forRoot({
            envFilePath: `${process.cwd()}/.env`,
            load: [configuration],
        }),
        KnexModule.forRoot({
            config: {
                client: 'mysql2',
                version: '5.7',
                useNullAsDefault: true,
                connection: {
                    host: process.env.DB_HOST,
                    port: process.env.DB_PORT as any,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                },
                migrations: {
                    extension: 'ts',
                    directory: './src/migrations',
                },
                seeds: {
                    extension: 'ts',
                    directory: './src/seeds',
                },
            },
        }),
        AuthModule,
        CustomerModule,
        CategoryModule,
        EmployeeModule,
        OrderDetailsModule,
        OrdersModule,
        ProductModule,
        ShippersModule,
        SuppliersModule,
        KnexErrorModule,
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('*');
    }
}
