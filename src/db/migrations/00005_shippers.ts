import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('shippers', (table)=>{
    table.increments('shipperId').unique().primary().notNullable();
    table.string('shipperName', 255).notNullable();
    table.string('phone', 1024).notNullable();
  })
}


export async function down(knex: Knex): Promise<void> {
}

