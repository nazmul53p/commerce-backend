import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('products', (table)=>{
    table.increments('productId').primary().unique().notNullable();
    table.string('productName', 255).notNullable();
    table.integer('productPrice', 255).notNullable();
    table.string('unit', 1024);

    table.integer('supplierId').unsigned();
    table.integer('categoryId').unsigned();

    table.foreign('supplierId').references('suppliers.supplierId')
    table.foreign('categoryId').references('categories.categoryId')

  })
}


export async function down(knex: Knex): Promise<void> {
}

