var sided = require('./sided')
var rems = require('./rems')
module.exports = function padding (state) {
  state = state || {}
  var config = state.config
  var query = state.query
  var output = `
/* PADDING */
.padding-0${query}{padding:0;}
.padding-top-0${query}{padding-top:0;}
.padding-right-0${query}{padding-right:0;}
.padding-bottom-0{query}{padding-bottom:0;}
.padding-left-0{query}{padding-left:0;}
`
  function template (label, step, side, value) {
    side = side ? side = `-${side}` : ''
    return `.padding${label}${step}${query}{padding${side}:${rems({config, value})};}\n`
  }

  output += sided({config, template})
  return output
}
