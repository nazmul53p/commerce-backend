import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(@InjectModel() private readonly knex: Knex) {}
  async create(createSupplierDto: CreateSupplierDto[]) {
    try {
      const map = createSupplierDto.map((item) => ({
        ...item,
        supplierID: parseInt(String(item.supplierID)),
      }));

      const res = await this.knex('suppliers').insert(map);
      return {
        message: 'Customer created successfully',
        data: res,
      };
    } catch (e) {
      return {
        message: 'Customer created failed',
        data: e,
      };
    }
  }

  async findAll() {
    return this.knex.table('suppliers');
  }

  findOne(id: number) {
    return `This action returns a #${id} supplier`;
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return `This action updates a #${id} supplier`;
  }

  remove(id: number) {
    return `This action removes a #${id} supplier`;
  }
}
