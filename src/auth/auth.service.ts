import { BadRequestException, ConflictException, HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Knex } from 'knex';
import { CustomerService } from 'modules/customer/customer.service';
import { InjectModel } from 'nest-knexjs';
import { AuthLoginDto } from './dto/login-auth.dto';
import { AuthSignupDto } from './dto/signup-auth.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel() private readonly knex: Knex,
        private readonly customerService: CustomerService,
        private readonly jwtService: JwtService,
    ) {}

    async signup(authSignupDto: AuthSignupDto) {
        try {
            const customer = await this.customerService.findByEmail(authSignupDto.customerEmail);

            if (Array.isArray(customer.data) && customer.data.length <= 0) {
                // password hash
                authSignupDto.customerPassword = await bcrypt.hash(
                    authSignupDto.customerPassword,
                    10,
                );

                // create user
                const newCustomer = await this.customerService.create(authSignupDto);

                return {
                    message: 'Your request Successful',
                    isError: false,
                    data: newCustomer,
                };
            } else {
                throw new ConflictException('Customer in db');
            }
        } catch (e) {
            throw new HttpException({ ...e.response }, e.status);
        }
    }

    async login({ email, password }: AuthLoginDto) {
        try {
            const resCustomer = await this.customerService.findByEmail(email);
            if (Array.isArray(resCustomer.data) && resCustomer.data.length > 0) {
                const customer = Object.assign(resCustomer.data[0], {});

                const passwordMatch = await bcrypt.compare(
                    password,
                    customer?.customerPassword as string,
                );
                if (passwordMatch) {
                    const payload = { ...customer };
                    return this.jwtService.sign(payload);
                }
            } else {
                throw new BadRequestException({
                    message: 'Customer not  founded',
                    isError: true,
                    data: [],
                });
            }
        } catch (e) {
            throw new HttpException({ ...e.response }, e.status);
        }
    }
}
