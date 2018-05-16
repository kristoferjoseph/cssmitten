var sided = require('./sided')
var rems = require('./rems')
module.exports = function padding (state) {
  state = state || {}
  var config = state.config
  var query = state.query
  var output = `/* PADDING */
.p-none${query}{padding:none;}
.pt-none${query}{padding-top:none;}
.pr-none${query}{padding-right:none;}
.pb-none${query}{padding-bottom:none;}
.pl-none${query}{padding-left:none;}
 `
  function template (label, step, side, value) {
    side = side ? side = `-${side}` : ''
    return `.p${label}${step}${query}{padding${side}:${rems(value)};}\n`
  }

  output += sided({config, template})
  return output
}
