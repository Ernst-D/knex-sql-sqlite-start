import { Knex } from "knex";
import { TestTable } from "../../types";
import { testData } from "../test-data/data";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("TestTable").del();

    // Inserts seed entries
    await knex<TestTable>("TestTable").insert([...testData()]);
};
