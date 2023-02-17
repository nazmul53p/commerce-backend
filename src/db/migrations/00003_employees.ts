import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('employees', (table)=>{
    table.increments('employeeId').unique().primary().notNullable();
    table.string('firstName', 255);
    table.string('lastName', 255);
    table.date('birthDate');
    table.string('photo', 1024);
    table.string('notes', 1024);

  })
}


export async function down(knex: Knex): Promise<void> {
}

