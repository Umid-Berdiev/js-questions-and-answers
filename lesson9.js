// var hoisting vs let hoisting
// WHAT will be the output from this code and why?

function f() {
  console.log('var', area);
  console.log('let', name);
  let name = 'Geology';
  var area = 'Bert';
}

f();