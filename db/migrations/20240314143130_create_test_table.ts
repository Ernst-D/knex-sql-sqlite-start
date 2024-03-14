import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("TestTable", (t) => {
        t.increments("id").primary();
        t.string("first_name", 100);
        t.string("last_name", 100);
        t.text("bio");
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("TestTable");
}

