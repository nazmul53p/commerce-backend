import { Module } from '@nestjs/common';
import { ConfigService as ConfigServices } from '@nestjs/config';
import { CustomerService } from 'modules/customer/customer.service';
import { JWTtokenStrategy } from './jwt-token-strategy';
import { JWTtokenGuard } from './Jwt-token.guard';

@Module({
  imports: [],
  providers: [JWTtokenGuard, JWTtokenStrategy, ConfigServices, CustomerService],
  exports: [],
})
export class JWTtoken {}
