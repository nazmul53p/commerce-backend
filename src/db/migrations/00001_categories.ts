import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('categories', (table) => {
        table.increments('categoryId').unique().primary().notNullable();
        table.string('categoryName', 255);
        table.string('categoryDescription', 1024);
    });
}

export async function down(knex: Knex): Promise<void> {}
