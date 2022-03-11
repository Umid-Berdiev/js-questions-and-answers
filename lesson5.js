// ASI, object literals, square bracket syntax, hoisting
// what happens when you run this code? why?
// how would you fix it?

let a = {
  a: 123
};

[a].forEach((item) => {
  console.log(item)
})