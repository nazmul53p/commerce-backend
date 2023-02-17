import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { CreateShipperDto } from './dto/create-shipper.dto';
import { UpdateShipperDto } from './dto/update-shipper.dto';

@Injectable()
export class ShippersService {
  constructor(@InjectModel() private readonly knex: Knex) {}
  async create(createShipperDto: CreateShipperDto[]) {
    try {
      const map = createShipperDto.map((item) => ({
        ...item,
        shipperID: parseInt(String(item.shipperID)),
      }));

      const res = await this.knex('shippers').insert(map);
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
    return this.knex.table('shippers');
  }

  findOne(id: number) {
    return `This action returns a #${id} shipper`;
  }

  update(id: number, updateShipperDto: UpdateShipperDto) {
    return `This action updates a #${id} shipper`;
  }

  remove(id: number) {
    return `This action removes a #${id} shipper`;
  }
}
