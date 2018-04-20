var base = require('./base')
module.exports = function rems (value) {
  return `${Math.round((value / base) * 1000) / 1000}rem`
}
