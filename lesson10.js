// generate random hex color values
// use a function that can return a full 6 digit hex value with one line

function hexColorGenerator() {
  // const hexLetters = '0123456789abcdef'
  // console.log(Math.round(Math.random() * 1000000))
  return '#' + Math.random().toString(16).substr(2, 6);
}

console.log(hexColorGenerator())