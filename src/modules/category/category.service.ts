import { HttpException, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { KnexErrorService } from 'knexerrors';
import { InjectModel } from 'nest-knexjs';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel() private readonly knex: Knex,
        private readonly knexErrorService: KnexErrorService,
    ) {}
    async create(createCategory: CreateCategoryDto[]) {
        try {
            const map = createCategory.map((item) => ({
                ...item,
                categoryID: parseInt(item.categoryID),
            }));

            const res = await this.knex('categories')
                .insert(map)
                .catch((e) => {
                    this.knexErrorService.errorMessage(e.message);
                });
            return {
                message: 'Category created successfully',
                data: res,
            };
        } catch (e) {
            throw new HttpException({ ...e.response }, e.status);
        }
    }

    async findAll() {
        return await this.knex.table('categories').catch((e) => {
            this.knexErrorService.errorMessage(e.message);
        });
    }

    async findOne(id: number) {
        const res = await this.knex.raw(
            `SELECT
                *c  
            FROM
                suppliers
            JOIN products ON
                products.supplierID = suppliers.supplierID
            JOIN orderDetails ON
                orderDetails.productID = products.productID
            JOIN orders ON
                orders.orderID = orderDetails.orderID
            JOIN customers ON 
                customers.customerId = orders.customerID
                where customers.customerId = 1`,
        );
        console.log(res);

        return res;
    }

    update(id: number, updateCategoryDto: UpdateCategoryDto) {
        return `This action updates a #${id} category`;
    }

    remove(id: number) {
        return `This action removes a #${id} category`;
    }
}
