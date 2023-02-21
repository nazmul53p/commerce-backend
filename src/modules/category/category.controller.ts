import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JWTtokenGuard } from 'auth/Jwt-token/Jwt-token.guard';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@ApiTags('category')
@ApiBearerAuth('jwt')
@UseGuards(JWTtokenGuard)
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @ApiOperation({
        summary: 'create a new category',
        description:
            'this category api is responsible for creating a category by post request. to make post request check json format properly',
    })
    @ApiBody({
        type: CreateCategoryDto,
    })
    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto[]) {
        return this.categoryService.create(createCategoryDto);
    }

    @ApiOperation({
        summary: 'get all categories',
        description:
            'this category api is responsible for get all categories by get request. to make get request check json format properly',
    })
    @Get()
    findAll() {
        return this.categoryService.findAll();
    }

    @ApiOperation({
        summary: 'get a category',
        description:
            'this category api is responsible for get a category by get request. to make get request check json format properly',
    })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.categoryService.findOne(+id);
    }

    @ApiOperation({
        summary: 'update a category',
        description:
            'this category api is responsible for update a category by patch request. to make patch request check json format properly',
    })
    @ApiBody({
        type: UpdateCategoryDto,
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
        return this.categoryService.update(+id, updateCategoryDto);
    }
    @ApiOperation({
        summary: 'delete a category',
        description:
            'this category api is responsible for delete a category by delete request. to make delete request check json format properly',
    })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.categoryService.remove(+id);
    }
}
