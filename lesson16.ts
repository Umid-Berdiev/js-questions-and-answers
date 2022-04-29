/*
write the function to determine the largest difference
between any two numbers in an array of numbers
*/
type NumberArray = Array < number > ;

let numbers: NumberArray = [12, 2, 2, 6, 5, 9, 10, 10, 33, 33];
let difference = (arr: number[]): number => {
  // at first remove duplicates from array
  const uniques = Array.from(new Set(arr));
  console.log(uniques)
  // find min and max numbers
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  return max - min;
}

console.log(difference(numbers))