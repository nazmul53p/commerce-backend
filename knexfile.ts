import { Knex } from 'knex';

// Update with your config settings.
const config: Knex.Config = {
    client: 'mysql2',
    version: '5.7',
    useNullAsDefault: true,
    connection: {
        host: 'mysql_server',
        port: 3306,
        user: 'root',
        password: '1',
        database: 'ecommerce',
        // database: 'test',
        // multipleStatements: true,
    },
    migrations: {
        extension: 'ts',
        directory: './src/db/migrations',
    },
    seeds: {
        extension: 'ts',
        directory: './src/db/seeds',
    },
};

export default config;
