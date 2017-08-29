var sizes = require('./sizes')
var align = require('./align')
var decoration = require('./decoration')
module.exports = function typography (query) {
  return `
${sizes(query)}
${align(query)}
${decoration()}`
}
