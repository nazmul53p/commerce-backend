import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    const DB_NAME = process.env.DB_NAME;
    return await knex.raw(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
}

export async function down(knex: Knex): Promise<void> {}
