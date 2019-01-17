var sided = require('./sided')
var rems = require('./rems')
module.exports = function margin (state) {
  state = state || {}
  var config = state.config
  var query = state.query
  var output = `
/* MARGIN */
.margin-none${query}{margin:0;}
.margin-top-none${query}{margin-top:0;}
.margin-right-none${query}{margin-right:0;}
.margin-bottom-none${query}{margin-bottom:0;}
.margin-left-none${query}{margin-left:0;}
.margin-right-auto${query}{margin-right:auto;}
.margin-left-auto${query}{margin-left:auto;}
`

  function template (label, step, side, value) {
    side = side ? side = `-${side}` : ''
    return `.margin${label}${step}${query}{margin${side}:${rems({config, value})};}\n`
  }

  output += sided({config, template})
  return output
}
