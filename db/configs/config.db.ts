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
    }
}

const sqliteMemConfig: Knex.Config = {
    client: "sqlite3",
    connection: {
        filename:":memory:"
    }
}

export const envConfig = {
    ["dev:mem"]: sqliteMemConfig,
    ["dev"]: sqliteConfig,
    ["staging"]: postgresConfig
}
