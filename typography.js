var sizes = require('./sizes')
var align = require('./align')
module.exports = function typography(query) {
  var output =
`${sizes(query)}
${align(query)}`

  return output
}
