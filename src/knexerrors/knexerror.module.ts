import { Global, Module } from '@nestjs/common';
import { KnexErrorService } from '.';

@Global()
@Module({
    providers: [KnexErrorService],
    exports: [KnexErrorService],
})
export class KnexErrorModule {}
