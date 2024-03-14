// @ts-check

const test = require("node:test");
const assert = require("node:assert");
const knex = require("knex")

test.describe("suite for database testing", ()=>{
    /**
     * @type {knex.Knex}
     */
    let db;

    test.before(()=>{
        db = knex({
            client:"postgres",
            connection:{
                host : '127.0.0.1',
                port : 5432,
                user : 'postgres',
                password : 'password',
                database : 'docker_db'
            }
        })
    })

    test.after(()=>{
        db.destroy();
    })

    test.it("can SELECT one user from User table", async ()=>{
        const result = await db("User").where("id",1);
        console.log(result)
    })
})
