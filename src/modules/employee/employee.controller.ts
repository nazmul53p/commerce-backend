import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JWTtokenGuard } from 'auth/Jwt-token/Jwt-token.guard';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeeService } from './employee.service';

@ApiTags('employee')
@ApiBearerAuth('jwt')
@UseGuards(JWTtokenGuard)
@Controller('employee')
@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}
    @ApiOperation({
        summary: 'create a new employee',
        description:
            'this employee api is responsible for creating a employee by post request. to make post request check json format properly',
    })
    @ApiBody({
        type: CreateEmployeeDto,
    })
    @Post()
    create(@Body() createEmployeeDto: CreateEmployeeDto[]) {
        return this.employeeService.create(createEmployeeDto);
    }
    @ApiOperation({
        summary: 'get all employees',
        description:
            'this employee api is responsible for get all employees by get request. to make get request check json format properly',
    })
    @Get()
    findAll() {
        return this.employeeService.findAll();
    }
    @ApiOperation({
        summary: 'get a employee',
        description:
            'this employee api is responsible for get a employee by get request. to make get request check json format properly',
    })
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.employeeService.findOne(+id);
    }
    @ApiOperation({
        summary: 'update a employee',
        description:
            'this employee api is responsible for update a employee by patch request. to make patch request check json format properly',
    })
    @ApiBody({
        type: UpdateEmployeeDto,
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
        return this.employeeService.update(+id, updateEmployeeDto);
    }
    @ApiOperation({
        summary: 'delete a employee',
        description:
            'this employee api is responsible for delete a employee by delete request. to make delete request check json format properly',
    })
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.employeeService.remove(+id);
    }
}
