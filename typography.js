var sizes = require('./sizes')
var align = require('./align')
var weights = require('./weights')
module.exports = function typography(query) {
  var output =
`${sizes(query)}
${weights(query)}
${align(query)}`

  return output
}
