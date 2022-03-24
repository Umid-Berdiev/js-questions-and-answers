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
    setTimeout(() => {
      console.log(i) // 3, 3, 3
    }, 1000)
  }
}

// fix f2 function with let
function f3() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i) // 1, 2, 3
    }, 1000)
  }
}

// fix f2 function with binding
function f4() {
  for (var i = 0; i < 3; i++) {
    setTimeout((function(x) {
      console.log(x)
    }).bind(null, i), 1000)
  }
}

f1(1);
f2();
f3();
f4();