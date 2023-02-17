import { Module } from '@nestjs/common';
import {
  ConfigModule as ConfigModules,
  ConfigService as ConfigServices,
} from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CustomerService } from 'modules/customer/customer.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JWTtoken } from './Jwt-token/Jwt-token.module';

@Module({
  imports: [
    JWTtoken,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModules],
      inject: [ConfigServices],
      useFactory: async (configService: ConfigServices) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: +configService.get('JWT_EXPIRES_IN'),
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    CustomerService,
    ConfigServices,
    {
      provide: APP_GUARD,
      useClass: JWTtoken,
    },
  ],
})
export class AuthModule {}
