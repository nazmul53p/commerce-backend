import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('orders', (table) => {
        table.increments('orderId').unique().primary().notNullable();
        table.datetime('orderDateTime', { useTz: true, precision:6 });

        table.integer('customerId').unsigned();
        table.integer('employeeId').unsigned();
        table.integer('shipperId').unsigned();

        table.foreign('customerId').references('customers.customerId');
        table.foreign('employeeId').references('employees.employeeId');
        table.foreign('shipperId').references('shippers.shipperId');
    });
}

export async function down(knex: Knex): Promise<void> {}
