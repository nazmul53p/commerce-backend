import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JWTtokenGuard } from 'auth/Jwt-token/Jwt-token.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';
@ApiTags('product')
@ApiBearerAuth('jwt')
@UseGuards(JWTtokenGuard)
@Controller('product')
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    @ApiOperation({
        summary: 'create a new product',
        description:
            'this product api is responsible for creating a product by post request. to make post request check json format properly',
    })
    @ApiBody({
        type: CreateProductDto,
    })
    @Post()
    create(@Body() createProductDto: CreateProductDto[]) {
        return this.productService.create(createProductDto);
    }
    @ApiOperation({
        summary: 'get all products',
        description:
            'this product api is responsible for get all products by get request. to make get request check json format properly',
    })
    @Get()
    findAll() {
        return this.productService.findAll();
    }
    @ApiOperation({
        summary: 'get a product',
        description:
            'this product api is responsible for get a product by get request. to make get request check json format properly',
    })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productService.findOne(+id);
    }
    @ApiOperation({
        summary: 'update a product',
        description:
            'this product api is responsible for update a product by patch request. to make patch request check json format properly',
    })
    @ApiBody({
        type: UpdateProductDto,
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(+id, updateProductDto);
    }
    @ApiOperation({
        summary: 'delete a product',
        description:
            'this product api is responsible for delete a product by delete request. to make delete request check json format properly',
    })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productService.remove(+id);
    }
}
