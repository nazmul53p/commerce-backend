import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('orderDetails', (table)=>{
    table.increments('orderDetailId').unique().primary().notNullable();
    table.integer('quantity').notNullable().defaultTo(0)

    table.integer('orderId').unsigned();
    table.integer('productId').unsigned();

    table.foreign('orderId').references('orders.orderId')
    table.foreign('productId').references('products.productId')

  })
}


export async function down(knex: Knex): Promise<void> {
}

