var weights = require('./weights')
var sizes = require('./sizes')
var colors = require('./color')
module.exports = function typography(query) {
  var output =
`${weights}
${colors()}
${sizes()}
.ta-i{text-align:inherit;}
.ta-c{text-align:center;}
.ta-l{text-align:left;}
.ta-r{text-align:right;}
.truncate{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:no-wrap;
}
`
  return output
}
