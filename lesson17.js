// write a function to determine if thge supplied string is a palindrome
// Eg: radar, racecar, kayak, and redder are all palindromes
// they are the spelled same backwards and forwards

const isPalindrome = (word) => {
  let tempWord = word.toLowerCase();
  let reverseWord = ''
  for (var i = tempWord.length - 1; i >= 0; i--) {
    reverseWord += tempWord[i]
  }

  return tempWord === reverseWord

  // const reverseWord = tempWord.toLowerCase().split("").reverse().join("")
  // return tempWord === reverseWord
}

console.log(isPalindrome('radar'))
console.log(isPalindrome('redDer'))
console.log(isPalindrome('window'))
console.log(isPalindrome('anna'))