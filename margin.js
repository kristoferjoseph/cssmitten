var sided = require('./sided')
var rems = require('./rems')
module.exports = function margin (state) {
  state = state || {}
  var config = state.config
  var query = state.query
  var output = `/* MARGIN */
.m-none${query}{margin:none;}
.mt-none${query}{margin-top:none;}
.mr-none${query}{margin-right:none;}
.mb-none${query}{margin-bottom:none;}
.ml-none${query}{margin-left:none;}
.m-auto${query}{
  margin-right:auto;
  margin-left:auto;
}
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
