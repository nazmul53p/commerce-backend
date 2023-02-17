import { Knex } from 'knex';

// Update with your config settings.
const config: Knex.Config = {
    client: 'mysql',
    version: '5.7',
    useNullAsDefault: true,
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Naz Mul 22',
        database: 'ecommerce',
        // database: 'test',
    },
    migrations: {
        extension: 'ts',
        directory: "./src/db/migrations"
    },
    seeds: {
        extension: 'ts',
        directory: "./src/db/seeds"
    }
}

export default config;
