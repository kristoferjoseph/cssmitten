const rems = require('./rems')

module.exports = function width(state) {
  state = state || {}
  var config = state.config
  var query = state.label
  var ascending = (a, b) => a > b
  var params = config.width || {}
  var mins = params.mins
    ? mins.sort(ascending)
    : []
  var maxs = params.max
    ? maxs.sort(ascending)
    : []
  var viewports = params.viewport
    ? viewports.sort(ascending)
    : []
  var percents = params.percent
    ? percents.sort(ascending)
    : []

  var output = `
/* WIDTH */
.w0${query}{width:0;}
.w-auto${query}{width:auto;}
.w100${query}{width:100%;}
.vw0${query}{width:0vw;}
.vw100${query}{width:100vw;}
`

  mins.forEach(function (value, i) {
    output += `.min-w${i + 1}${query}{min-width:${rems({config, value})};}\n`
  })

  maxs.forEach(function (value, i) {
    output += `.max-w${i + 1}${query}{max-width:${rems({config, value})};}\n`
  })

  viewports.forEach(function (value, i) {
    output += `.vw-${i + 1}${query}{width:${value}vw;}`
  })

  percents.forEach(function (value) {
    output += `.w-${value}${query}{width:${value}%;}`
  })

  return output
}
