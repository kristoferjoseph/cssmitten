var sided = require('./sided')
var rems = require('./rems')
module.exports = function padding (state) {
  state = state || {}
  var config = state.config
  var query = state.query
  var output = `/* PADDING */
.p-none${query}{padding:0;}
.pt-none${query}{padding-top:0;}
.pr-none${query}{padding-right:0;}
.pb-none${query}{padding-bottom:0;}
.pl-none${query}{padding-left:0;}
`
  function template (label, step, side, value) {
    side = side ? side = `-${side}` : ''
    return `.p${label}${step}${query}{padding${side}:${rems({config, value})};}\n`
  }

  output += sided({config, template})
  return output
}
