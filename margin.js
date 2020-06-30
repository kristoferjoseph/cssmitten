var sided = require('./sided')
var rems = require('./rems')
module.exports = function margin (state) {
  state = state || {}
  var config = state.config
  var query = state.label
  var output = `
/* MARGIN */
.m-none${query}{margin:0;}
.mt-none${query}{margin-top:0;}
.mr-none${query}{margin-right:0;}
.mb-none${query}{margin-bottom:0;}
.ml-none${query}{margin-left:0;}
.m-auto${query}{margin-right:auto;margin-left:auto;}
.mr-auto${query}{margin-right:auto;}
.ml-auto${query}{margin-left:auto;}
`

  function template (label, step, side, value) {
    side = side ? side = `-${side}` : ''
    return `.m${label}${step}${query}{margin${side}:${rems({config, value})};}\n`
  }

  output += sided({config, template})
  return output
}
