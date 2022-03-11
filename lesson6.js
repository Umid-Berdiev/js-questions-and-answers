/**
 * create an example of a javascript singlton
 * after the first object is created, it will return additinal
 * references to itself
 */

let obj = (function() {
  let objInstance; // private variable
  function create() { // private func to create methods and properties
    let _isRunning = false;

    const start = () => {
      _isRunning = true
    }

    const stop = () => {
      _isRunning = false
    }

    const currentState = () => {
      return _isRunning
    }

    return {
      start,
      stop,
      currentState
    }
  }
  return {
    getInstance: function() {
      if (!objInstance) {
        objInstance = create()
      }
      return objInstance;
    }
  };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();

console.log(obj1.currentState())
console.log(obj2.currentState())

obj2.start()

console.log(obj1.currentState())
console.log(obj2.currentState())