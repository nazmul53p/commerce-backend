import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('shippers').del();

    // Inserts seed entries
    await knex('shippers').insert([
        {
            shipperId: 1,
            shipperName: 'Speedy Express',
            phone: '(503) 555-9831',
        },
        {
            shipperId: 2,
            shipperName: 'United Package',
            phone: '(503) 555-3199',
        },
        {
            shipperId: 3,
            shipperName: 'Federal Shipping',
            phone: '(503) 555-9931',
        },
    ]);
}
