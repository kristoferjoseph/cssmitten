var sizes = require('./sizes')
var lineHeight = require('./line-height')
var weights = require('./weights')
var align = require('./align')
var decoration = require('./decoration')
module.exports = function typography (state) {
  state = state || {}
  var query = state.query || ''
  return `
${sizes(state)}
${lineHeight(state)}
${weights(query)}
${align(query)}
${decoration()}`
}
