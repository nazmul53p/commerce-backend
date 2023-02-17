import { Global, Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Global()
@Module({
    controllers: [CustomerController],
    providers: [CustomerService],
})
export class CustomerModule {}
