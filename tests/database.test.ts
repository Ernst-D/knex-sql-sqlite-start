import t from "node:test";
import assert from "node:assert";
import knex, { Knex } from "knex";
import { envConfig } from "../db/configs/config.db";
import { TestTable } from "../types";

t.describe("database suite", async () => {
    let db: Knex;
    const env = process.env.NODE_ENV || "dev";
    const dbConfig = envConfig[env];
    debugger

    t.before(async () => {
        db = knex(dbConfig);

        if (env === "dev:mem") {
            debugger
            await db.migrate.latest({
                directory: "db/migrations"
            })
            await db.seed.run({
                directory: "db/seeds"
            });
        }
    })

    t.after(() => {
        db.destroy()
        debugger
    })

    t.test("can query last user from TestTable", async () => {
        const firstEntry = await db.select("*").from<TestTable>("TestTable").first();
        assert.equal(firstEntry.id, 1);
    })
})