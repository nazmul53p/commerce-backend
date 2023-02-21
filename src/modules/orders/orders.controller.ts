import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JWTtokenGuard } from 'auth/Jwt-token/Jwt-token.guard';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';
@ApiTags('orders')
@ApiBearerAuth('jwt')
@UseGuards(JWTtokenGuard)
@Controller('orders')
@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}
    @ApiOperation({
        summary: 'create a new orders',
        description:
            'this orders api is responsible for creating a orders by post request. to make post request check json format properly',
    })
    @Post()
    create(@Body() createOrderDto: CreateOrderDto[]) {
        return this.ordersService.create(createOrderDto);
    }
    @ApiOperation({
        summary: 'get all orders',
        description:
            'this orders api is responsible for get all orders by get request. to make get request check json format properly',
    })
    @Get()
    findAll() {
        return this.ordersService.findAll();
    }
    @ApiOperation({
        summary: 'get a orders',
        description:
            'this orders api is responsible for get a orders by get request. to make get request check json format properly',
    })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ordersService.findOne(+id);
    }
    @ApiOperation({
        summary: 'update a orders',
        description:
            'this orders api is responsible for update a orders by patch request. to make patch request check json format properly',
    })
    @ApiBody({
        type: UpdateOrderDto,
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
        return this.ordersService.update(+id, updateOrderDto);
    }
    @ApiOperation({
        summary: 'delete a orders',
        description:
            'this orders api is responsible for delete a orders by delete request. to make delete request check json format properly',
    })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ordersService.remove(+id);
    }
}
