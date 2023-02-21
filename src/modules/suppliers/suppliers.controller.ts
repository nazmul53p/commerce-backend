import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JWTtokenGuard } from 'auth/Jwt-token/Jwt-token.guard';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { SuppliersService } from './suppliers.service';
@ApiTags('suppliers')
@ApiBearerAuth('jwt')
@UseGuards(JWTtokenGuard)
@Controller('suppliers')
@Controller('suppliers')
export class SuppliersController {
    constructor(private readonly suppliersService: SuppliersService) {}
    @ApiOperation({
        summary: 'create a new suppliers',
        description:
            'this suppliers api is responsible for creating a suppliers by post request. to make post request check json format properly',
    })
    @ApiBody({
        type: CreateSupplierDto,
    })
    @Post()
    create(@Body() createSupplierDto: CreateSupplierDto[]) {
        return this.suppliersService.create(createSupplierDto);
    }
    @ApiOperation({
        summary: 'get all suppliers',
        description:
            'this suppliers api is responsible for get all suppliers by get request. to make get request check json format properly',
    })
    @Get()
    findAll() {
        return this.suppliersService.findAll();
    }
    @ApiOperation({
        summary: 'get a suppliers',
        description:
            'this suppliers api is responsible for get a suppliers by get request. to make get request check json format properly',
    })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.suppliersService.findOne(+id);
    }
    @ApiOperation({
        summary: 'update a suppliers',
        description:
            'this suppliers api is responsible for update a suppliers by patch request. to make patch request check json format properly',
    })
    @ApiBody({
        type: UpdateSupplierDto,
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateSupplierDto: UpdateSupplierDto) {
        return this.suppliersService.update(+id, updateSupplierDto);
    }
    @ApiOperation({
        summary: 'delete a suppliers',
        description:
            'this suppliers api is responsible for delete a suppliers by delete request. to make delete request check json format properly',
    })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.suppliersService.remove(+id);
    }
}
