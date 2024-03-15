import t from "node:test";
import assert from "node:assert";
import knex, { Knex } from "knex";
import { envConfig } from "../db/configs/config.db";
import { TestTable } from "../types";

t.describe("database suite for parallel run", async () => {
    let db: Knex;
    const env = process.env.NODE_ENV || "dev";
    const dbConfig = envConfig[env];

    t.beforeEach(async () => {
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

    t.afterEach(() => {
        db.destroy()
    })

    t.test("length of entries should be 4 after first entry remove", async ()=>{
        const del = await db<TestTable>("TestTable").where("id",1).del();
        assert.equal(del,1);

        const length = (await db<TestTable>("TestTable")).length;
        assert.equal(length,4)
    })
})