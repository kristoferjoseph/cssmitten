var rems = require('./rems')
module.exports = function width (state) {
  state = state || {}
  var config = state.config
  var query = state.query
  var ascending = (a, b) => a > b
  var params = config.width || {}
  var mins = params.mins
  mins = mins ? mins.sort(ascending) : []
  var maxs = params.max
  maxs = maxs ? maxs.sort(ascending) : []
  var viewports = params.viewport
  viewports = viewports ? viewports.sort(ascending) : []
  var percents = params.percent
  percents = percents ? percents.sort(ascending) : []

  var output = `/* WIDTH */
.width-0${query}{width:0;}
.width-auto${query}{width:auto;}
.width-100${query}{width:100%;}
.vieport-width-0${query}{width:0vw;}
.viewport-width-100${query}{width:100vw;}
`

  mins.forEach(function (value, i) {
    output += `.min-width${i + 1}${query}{min-width:${rems({config, value})};}\n`
  })

  maxs.forEach(function (value, i) {
    output += `.max-width${i + 1}${query}{max-width:${rems({config, value})};}\n`
  })

  viewports.forEach(function (value, i) {
    output += `.viewport-width-${i + 1}${query}{width:${value}vw;}`
  })

  percents.forEach(function (value) {
    output += `.width-${value}${query}{width:${value}%;}`
  })

  return output
}
