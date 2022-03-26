/*
 * write a function to determine if a number is an integer
 */

let isInt = (num) => {
  // return !isNaN(num) && num % 1 === 0
  return (!isNaN(num) && parseInt(num) === num)
}

console.log(3, isInt(3)) // true
console.log(3.5, isInt(3.5)) // false
console.log(1.0000, isInt(1.0000)) // true
// console.log('4', isInt('4')) // false
// console.log('4.6', isInt('4.6')) // false
