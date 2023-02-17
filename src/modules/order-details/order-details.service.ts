import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@Injectable()
export class OrderDetailsService {
  constructor(@InjectModel() private readonly knex: Knex) {}

  async create(createOrderDetailDto: CreateOrderDetailDto[]) {
    try {
      const map = createOrderDetailDto.map((item) => ({
        ...item,
        orderDetailID: parseInt(String(item.orderDetailID)),
        orderID: parseInt(String(item.orderID)),
        productID: parseInt(String(item.productID)),
      }));

      const res = await this.knex('orderDetails').insert(map);
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
    return this.knex.table('orderDetails');
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDetail`;
  }

  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} orderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetail`;
  }
}
