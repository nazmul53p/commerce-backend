import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JWTtokenGuard } from 'auth/Jwt-token/Jwt-token.guard';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetailsService } from './order-details.service';

@ApiTags('order-details')
@ApiBearerAuth('jwt')
@UseGuards(JWTtokenGuard)
@Controller('order-details')
@Controller('order-details')
export class OrderDetailsController {
    constructor(private readonly orderDetailsService: OrderDetailsService) {}

    @ApiOperation({
        summary: 'create a new order-details',
        description:
            'this order-details api is responsible for creating a order-details by post request. to make post request check json format properly',
    })
    @ApiBody({
        type: CreateOrderDetailDto,
    })
    @Post()
    create(@Body() createOrderDetailDto: CreateOrderDetailDto[]) {
        return this.orderDetailsService.create(createOrderDetailDto);
    }

    @ApiOperation({
        summary: 'get all order-details',
        description:
            'this order-details api is responsible for get all order-details by get request. to make get request check json format properly',
    })
    @Get()
    findAll() {
        return this.orderDetailsService.findAll();
    }

    @ApiOperation({
        summary: 'get a order-details',
        description:
            'this order-details api is responsible for get a order-details by get request. to make get request check json format properly',
    })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.orderDetailsService.findOne(+id);
    }

    @ApiOperation({
        summary: 'update a order-details',
        description:
            'this order-details api is responsible for update a order-details by patch request. to make patch request check json format properly',
    })
    @ApiBody({
        type: UpdateOrderDetailDto,
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateOrderDetailDto: UpdateOrderDetailDto) {
        return this.orderDetailsService.update(+id, updateOrderDetailDto);
    }

    @ApiOperation({
        summary: 'delete a order-details',
        description:
            'this order-details api is responsible for delete a order-details by delete request. to make delete request check json format properly',
    })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.orderDetailsService.remove(+id);
    }
}
