let myFunc = function(a, b) {
  if (arguments.length === myFunc.length) {
    console.log('we have a match')
  } else {
    console.log('no match')
  }
}

// determine if the func received the number of params it expected
myFunc(1);
myFunc(1, 2);
myFunc(1, 2, 3);