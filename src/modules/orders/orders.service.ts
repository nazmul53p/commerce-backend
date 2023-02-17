import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel() private readonly knex: Knex) {}
  async create(createOrderDto: CreateOrderDto[]) {
    try {
      const map = createOrderDto.map((item) => ({
        ...item,
        customerID: parseInt(String(item.customerID)),
        employeeID: parseInt(String(item.employeeID)),
        orderID: parseInt(String(item.orderID)),
      }));

      const res = await this.knex('orders').insert(map);
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
    return this.knex.table('orders');
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
