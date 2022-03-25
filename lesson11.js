/*
 * why do we get this weird result from the map method?
 * myarray.map(func);
 * we want to convert 3 strings into numbers
 */

let result1 = ['1', '7', '11'].map(parseInt); // [1, NaN, 3]
let result2 = ['1', '7', '11'].map(item => parseInt(item));

console.log(result1)
console.log(result2)