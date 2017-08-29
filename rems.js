var base = require('./base')
module.exports = function rems(value) {
  return `${value/base}rem`
}
