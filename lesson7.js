// solve the problem occurring in the second closure example

// simple closure
function f1(a) {
  let b = 2
  setTimeout(() => {
    console.log(a, b)
  }, 1000)
}

// closure with problem
function f2() {
  for (var i = 0; i < 3; i++) {

  }
}