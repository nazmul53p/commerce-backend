import { Injectable } from '@nestjs/common';
import { ConfigService as ConfigServices } from '@nestjs/config';

@Injectable()
export class ConfigService {
    constructor(private configService: ConfigServices) {}
    get DB_HOST(): string {
        return this.configService.get<string>('DB_HOST') as string;
    }

    get DB_USER(): string {
        return this.configService.get<string>('DB_USER') as string;
    }
    get DB_PASSWORD(): string {
        return this.configService.get<string>('DB_PASSWORD') as string;
    }

    get DB_NAME(): string {
        return this.configService.get<string>('DB_NAME') as string;
    }

    get JWT_SECRET(): string {
        return this.configService.get<string>('JWT_SECRET') as string;
    }
    get JWT_EXPIRES_IN(): string {
        return this.configService.get<string>('JWT_EXPIRES_IN') as string;
    }

    get DB_MYSQL() {
        return {
            DB_HOST: this.DB_HOST,
            DB_USER: this.DB_USER,
            DB_PASSWORD: this.DB_PASSWORD,
            DB_NAME: this.DB_NAME,
        };
    }
}
