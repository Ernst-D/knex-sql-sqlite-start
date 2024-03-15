import { Chance } from "chance";
import { TestTable } from "../../types";

const chance = new Chance();

const objectsNumber = 5;

type TestData = Omit<TestTable,"id">

export const testData = (): Array<TestData> => Array.from({ length: objectsNumber }, () => {
    return { first_name: chance.first(), last_name: chance.last(), bio: chance.word() }
}) 
