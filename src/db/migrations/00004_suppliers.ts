import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('suppliers', (table)=>{
    table.increments('supplierId').unique().primary().notNullable();
    table.string('supplierName', 255).notNullable();
    table.string('contactName', 255).notNullable();
    table.string('address', 255).notNullable();
    table.string('city', 255).notNullable();
    table.string('country', 255).notNullable();
    table.string('postalCode', 255).notNullable();
    table.string('phone').notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
}

