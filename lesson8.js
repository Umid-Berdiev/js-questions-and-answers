/*
 * create an array that is prepopulated with 5 random numbers
 */

// console.log(Math.random())
let a1 = Array.from({
  length: 5
}, n => Math.round(Math.random() * 10 + 1));
let a2 = Array(5).fill().map(n => Math.round(Math.random() * 10 + 1))
// for (var i = 0; i < 5; i++) {
//   a1.push(Math.round(Math.random() * 10 + 1))
// }
console.log('a1: ', a1);
console.log('a2: ', a2);