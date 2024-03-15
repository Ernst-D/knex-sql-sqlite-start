# knex-sql-sqlite-start

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

Small nodejs project which illustrates ability to utilize several SQL databases for developing and testing using [Knex.js](https://knexjs.org/). We use Postgres as database for development and Sqlite for testing. All migrations and seed are made with help of Knex.js. Purpose is to make sure that such strategy is possible: develop on containerised, test on in-memory/file database. TBA: Prisma and Drizzle examples.

## Getting Started <a name = "getting_started"></a>

Use [nvm](https://github.com/nvm-sh/nvm) to set correct nodejs version. This project relies on [native nodejs test runner](https://nodejs.org/api/test.html). 

Also, project has empty sqlite file, which serves for testing and development purposes. Use knex-cli for migrations and seeds. And please, **don't commit content** of sqlite file.

### Prerequisites

Set version 20 of nodejs:

```
nvm install lts/iron && nvm use lts/iron
```

### Installing

Install packages:

```
npm install
```

## Usage <a name = "usage"></a>

Run tests (or debug them), using in-memory sqlite:

```
npm run test:sqlite:mem
```

Run specific test, using in-memory sqlite:
```
NODE_ENV='dev:mem' npm run test -- ./tests/database-1.test.ts 
```

Setup Postgres in docker:
```
cd db && docker-compose up -d
```

Run Knex migrations (for Postgres):
```
npx knex migrate:latest --env staging
```

Run Knex seeds (for Postgres):
```
npx knex seed:run --env staging
```

Run Knex migrations (for Sqlite):
```
npx knex migrate:latest --env dev
```

Run Knex seeds (for Sqlite):
```
npx knex seed:run --env dev
```