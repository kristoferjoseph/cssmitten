var weights = require('./weights')
var sizes = require('./sizes')
var colors = require('./color')
module.exports =
`${weights}
${colors}
${sizes}
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
