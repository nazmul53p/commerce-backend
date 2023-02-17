import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
    controllers: [],
    providers: [ConfigService],
})
export class ConfigModule {}
