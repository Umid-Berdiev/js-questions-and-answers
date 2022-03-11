// revealing module patern
// turn this object literal into a modulke that only expopses the render method

/**
let myModule = {
  data:[],
  render: () => {

  },

  add: () => {

  },

  remove: () => {

  }
}

myModule.render()
**/

const myModule = (function() {
  const _data = []

  function _render() {
    console.log('from render func')
  }

  function _add() {
    // body...
    console.log('from add func')
  }

  function _remove() {
    // body...
    console.log('from remove func')
  }

  return {
    render: _render
  }
})()

myModule.render()