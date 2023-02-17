import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ContextIdFactory, ModuleRef } from '@nestjs/core';
import { PassportStrategy } from '@nestjs/passport';
import { CustomerService } from 'modules/customer/customer.service';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JWTtokenStrategy extends PassportStrategy(Strategy) {
    constructor(private moduleRef: ModuleRef, private readonly configService: ConfigService) {
        super({
            passReqToCallback: true,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET'),
        });
    }

    async validate(request: Request, username: any, password: string) {
        const contextId = ContextIdFactory.getByRequest(request);
        const customerService = await this.moduleRef.resolve(CustomerService, contextId);
        const customer = await customerService.findByEmail(username.customerEmail);
        if (Array.isArray(customer.data) && customer.data.length > 0) {
            return customer.data[0];
        }
        return false;
    }
}
