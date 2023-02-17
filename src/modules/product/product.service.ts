import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel() private readonly knex: Knex) {}
  async create(createProductDto: CreateProductDto[]) {
    try {
      const map = createProductDto.map((item) => ({
        ...item,
        productID: parseInt(String(item.productID)),
        supplierID: parseInt(String(item.supplierID)),
        categoryID: parseInt(String(item.categoryID)),
      }));

      const res = await this.knex('products').insert(map);
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
    return this.knex.table('products');
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
