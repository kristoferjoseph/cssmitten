var sizes = require('./sizes')
var weights = require('./weights')
var align = require('./align')
var decoration = require('./decoration')
module.exports = function typography (query) {
  return `
${sizes(query)}
${weights(query)}
${align(query)}
${decoration()}`
}
