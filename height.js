var rems = require('./rems')
module.exports = function height (state) {
  state = state || {}
  var config = state.config
  var query = state.query
  var ascending = (a, b) => a > b
  var params = config.height || {}
  var mins = params.mins
  mins = mins ? mins.sort(ascending) : []
  var maxs = params.max
  maxs = maxs ? maxs.sort(ascending) : []
  var viewports = params.viewport
  viewports = viewports ? viewports.sort(ascending) : []
  var percents = params.percent
  percents = percents ? percents.sort(ascending) : []

  var output = `/* HEIGHT */
.h-0${query}{height:0;}
.h-100${query}{height:100%;}
.vh-0${query}{height:0vh;}
.vh-100${query}{height:100vh;}
`

  mins.forEach(function (value, i) {
    output += `.min-h${i + 1}${query}{min-height:${rems({config, value})};}\n`
  })

  maxs.forEach(function (value, i) {
    output += `.max-h${i + 1}${query}{max-height:${rems({config, value})};}\n`
  })

  viewports.forEach(function (value, i) {
    output += `.vh${i + 1}${query}{height:${value}vh;}`
  })

  percents.forEach(function (value) {
    output += `.h${value}${query}{height:${value}%;}`
  })

  return output
}
