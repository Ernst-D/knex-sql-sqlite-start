// @ts-check

import test from "node:test"
import assert from "node:assert"

// test("test case", ()=>{
//     assert.equal(1,1)
// })

/**
 * 
 * @param {Array<number>} arr 
 * @param {number} index 
 * @param {Array<number>} resArr 
 */
function recursiveCall(arr, index, resArr){
    if(arr[index] == null){
        return;
    }
    else {
        resArr.push(Math.pow(arr[index],2))
        index++
        recursiveCall(arr,index,resArr);
    }
}

function main(){
    let index = 0;
    const arr = [1,2,3,4,9];
    const resArr = [];

    recursiveCall(arr,index,resArr);

    console.log(index);
    console.log(arr);
    console.log(resArr);
}

main()
