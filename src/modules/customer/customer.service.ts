import { HttpException, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { KnexErrorService } from 'knexerrors';
import { InjectModel } from 'nest-knexjs';
import { CreateCustomerDto, Customer } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
    constructor(
        @InjectModel() private readonly knex: Knex,
        private readonly knexErrorService: KnexErrorService,
    ) {}

    async create(createCustomerDto: CreateCustomerDto | CreateCustomerDto[]) {
        try {
            const res = await this.knex('customer')
                .insert(createCustomerDto)
                .catch((e) => {
                    this.knexErrorService.errorMessage(e.message);
                });
            return {
                message: 'Customer created successfully',
                data: res,
                isError: false,
            };
        } catch (e) {
            throw new HttpException({ ...e.response }, e.status);
        }
    }

    async findAll() {
        return await this.knex('customers')
            .select('*')
            .catch((e) => {
                this.knexErrorService.errorMessage(e.message);
            });
    }

    async findOne(id: number) {
        return await this.knex('customers')
            .where('customerId', id)
            .select('*')
            .catch((e) => {
                this.knexErrorService.errorMessage(e.message);
            });
    }

    async findByEmail(email: string) {
        try {
            const customer = await this.knex<Customer>('customers')
                .where('customerEmail', email)
                .select('*')
                .catch((e) => {
                    this.knexErrorService.errorMessage(e.message);
                });

            return {
                message: 'Customer founded',
                isError: false,
                data: customer,
            };
        } catch (e) {
            throw new HttpException({ ...e.response }, e.status);
        }
    }

    async update(id: number, updateCustomerDto: UpdateCustomerDto) {
        return await this.knex('customers')
            .where('customerId', id)
            .update(updateCustomerDto)
            .catch((e) => {
                this.knexErrorService.errorMessage(e.message);
            });
    }

    async remove(id: number) {
        return await this.knex('customers').where('customerId', id).delete();
    }
}
