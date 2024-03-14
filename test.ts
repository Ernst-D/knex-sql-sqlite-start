import knex from "knex";
import Chance from "chance";

const chance = new Chance();

type TestTable = {
    id: number,
    first_name: string,
    last_name: string,
    bio: string
}

async function main(): Promise<void> {
    const db = knex({
        client: "postgres",
        connection: {
            host: '127.0.0.1',
            port: 5432,
            user: 'postgres',
            password: 'password',
            database: 'docker_db'
        }
    })

    try {
        const exists = await db.schema.hasTable("TestTable");

        if (!exists) {
            await db.schema.createTable("TestTable", (t) => {
                t.increments("id").primary();
                t.string("first_name", 100);
                t.string("last_name", 100);
                t.text("bio");
            })
        }

        await db<TestTable>("TestTable").insert({
            first_name: chance.first(),
            last_name: chance.last(),
            bio: chance.word()
        })

    } catch (error) {
        console.error(error)
    } finally {
        db.destroy();
    }
}

main()