import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';

import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JWTtokenGuard } from 'auth/Jwt-token/Jwt-token.guard';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@ApiTags('customer')
@ApiBearerAuth('jwt')
@UseGuards(JWTtokenGuard)
@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @ApiOperation({
        summary: 'create a new customer',
        description:
            'this customer api is responsible for creating a customer by post request. to make post request check json format properly',
    })
    @ApiBody({
        type: CreateCustomerDto,
    })
    @Post()
    create(@Body() createCustomerDto: CreateCustomerDto[]) {
        return this.customerService.create(createCustomerDto);
    }

    @ApiOperation({
        summary: 'get all customers',
        description:
            'this customer api is responsible for get all customers by get request. to make get request check json format properly',
    })
    @Get()
    findAll() {
        return this.customerService.findAll();
    }

    @ApiOperation({
        summary: 'get a customer',
        description:
            'this customer api is responsible for get a customer by get request. to make get request check json format properly',
    })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.customerService.findOne(+id);
    }

    @ApiOperation({
        summary: 'update a customer',
        description:
            'this customer api is responsible for update a customer by patch request. to make patch request check json format properly',
    })
    @ApiBody({
        type: UpdateCustomerDto,
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
        return this.customerService.update(+id, updateCustomerDto);
    }

    @ApiOperation({
        summary: 'delete a customer',
        description:
            'this customer api is responsible for delete a customer by delete request. to make delete request check json format properly',
    })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.customerService.remove(+id);
    }
}
