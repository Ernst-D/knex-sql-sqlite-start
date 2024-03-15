import { Knex } from "knex"

const postgresConfig: Knex.Config = {
    client: "postgres",
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'password',
        database: 'docker_db'
    }
}

const sqliteConfig: Knex.Config = {
    client: "sqlite3",
    connection: {
        filename: "./db/sqlite/dev.sqlite3"
    },
    // sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
    useNullAsDefault: true,
}

const sqliteMemConfig: Knex.Config = {
    client: "sqlite3",
    connection: {
        filename:":memory:"
    },
    // sqlite does not support inserting default values. Set the `useNullAsDefault` flag to hide this warning. (see docs https://knexjs.org/guide/query-builder.html#insert).
    useNullAsDefault: true,
}

export const envConfig = {
    ["dev:mem"]: sqliteMemConfig,
    ["dev"]: sqliteConfig,
    ["staging"]: postgresConfig
}
