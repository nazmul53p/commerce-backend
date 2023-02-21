import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JWTtokenGuard } from 'auth/Jwt-token/Jwt-token.guard';
import { CreateShipperDto } from './dto/create-shipper.dto';
import { UpdateShipperDto } from './dto/update-shipper.dto';
import { ShippersService } from './shippers.service';
@ApiTags('shippers')
@ApiBearerAuth('jwt')
@UseGuards(JWTtokenGuard)
@Controller('shippers')
@Controller('shippers')
export class ShippersController {
    constructor(private readonly shippersService: ShippersService) {}
    @ApiOperation({
        summary: 'create a new shippers',
        description:
            'this shippers api is responsible for creating a shippers by post request. to make post request check json format properly',
    })
    @ApiBody({
        type: CreateShipperDto,
    })
    @Post()
    create(@Body() createShipperDto: CreateShipperDto[]) {
        return this.shippersService.create(createShipperDto);
    }
    @ApiOperation({
        summary: 'get all shippers',
        description:
            'this shippers api is responsible for get all shippers by get request. to make get request check json format properly',
    })
    @Get()
    findAll() {
        return this.shippersService.findAll();
    }
    @ApiOperation({
        summary: 'get a shippers',
        description:
            'this shippers api is responsible for get a shippers by get request. to make get request check json format properly',
    })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.shippersService.findOne(+id);
    }
    @ApiOperation({
        summary: 'update a shippers',
        description:
            'this shippers api is responsible for update a shippers by patch request. to make patch request check json format properly',
    })
    @ApiBody({
        type: UpdateShipperDto,
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateShipperDto: UpdateShipperDto) {
        return this.shippersService.update(+id, updateShipperDto);
    }
    @ApiOperation({
        summary: 'delete a shippers',
        description:
            'this shippers api is responsible for delete a shippers by delete request. to make delete request check json format properly',
    })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.shippersService.remove(+id);
    }
}
