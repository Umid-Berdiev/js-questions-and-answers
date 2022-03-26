/*
 * write a function to determine is one string is
 * a case-insensitive anagram of another string
 * abcd bdca - true
 */

let isAnagram = (str1, str2) => {
  // const s1 = str1.toLowercase()
  // const s2 = str2.toLowercase()
  // return s1.length === s2.length &&
  //   s2.split("").every(char => s1.includes(char))

  let sorted1 = str1.split('').sort().join('').toLowercase()
  let sorted2 = str2.split('').sort().join('').toLowercase()
  return sorted1 === sorted2
}

console.log('abcd bdca', isAnagram('abcd', 'bdca')) // true
console.log('abcd bdca', isAnagram('abcd', 'abcdw')) // false