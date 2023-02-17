import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex('categories').del();

    // Inserts seed entries
    await knex('categories').insert([
        {
            categoryId: 1,
            categoryName: 'Beverages',
            categoryDescription: 'Soft drinks',
        },
        {
            categoryId: 2,
            categoryName: 'Condiments',
            categoryDescription: 'Sweet and savory sauces',
        },
        {
            categoryId: 3,
            categoryName: 'Confections',
            categoryDescription: 'Desserts',
        },
        {
            categoryId: 4,
            categoryName: 'Dairy Products',
            categoryDescription: 'Cheeses',
        },
        {
            categoryId: 5,
            categoryName: 'Grains/Cereals',
            categoryDescription: 'Breads',
        },
        {
            categoryId: 6,
            categoryName: 'Meat/Poultry',
            categoryDescription: 'Prepared meats',
        },
        {
            categoryId: 7,
            categoryName: 'Produce',
            categoryDescription: 'Dried fruit and bean curd',
        },
        {
            categoryId: 8,
            categoryName: 'Seafood',
            categoryDescription: 'Seaweed and fish',
        },
    ]);
}
