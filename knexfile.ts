import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  dev: {
    client: "sqlite3",
    connection: {
      filename: "./db/sqlite/dev.sqlite3"
    },
    migrations: {
      tableName: "knex_migrations",
      directory:"./db/migrations"
    },
    seeds: {
      directory:"./db/seeds"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "docker_db",
      user: "postgres",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory:"./db/migrations"
    },
    seeds: {
      directory:"./db/seeds"
    }
  },

  prod: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
