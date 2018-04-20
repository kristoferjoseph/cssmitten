var sided = require('./sided')
var rems = require('./rems')
module.exports = function padding (query) {
  var output = `/* PADDING */
.p-none${query}{padding:none;}
.pt-none${query}{padding-top:none;}
.pr-none${query}{padding-right:none;}
.pb-none${query}{padding-bottom:none;}
.pl-none${query}{padding-left:none;}
 `
  output += sided(function (label, step, side, value) {
    side = side ? side = `-${side}` : ''
    return `.p${label}${step}${query}{padding${side}:${rems(value)};}\n`
  })
  return output
}
