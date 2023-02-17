import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('customers', (table)=>{
    table.increments('customerId').unique().primary().notNullable();
    table.string('customerName', 255);
    table.string('customerPhone', 1024);
    table.string('customerEmail', 255).unique().notNullable();
    table.string('customerAddress', 1024);
    table.string('customerCity', 255);
    table.string('customerPostalCode', 255);
    table.string('customerCountry', 255);
    table.string('customerPassword', 2048);
    table.integer('isActive', 1).defaultTo(0);
  })
}


export async function down(knex: Knex): Promise<void> {
}

