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

  var output = `
/* HEIGHT */
.height-auto${query}{height:auto;}
.height-0${query}{height:0;}
.height-100${query}{height:100%;}
.viewport-height-0${query}{height:0vh;}
.viewport-height-100${query}{height:100vh;}
`

  mins.forEach(function (value, i) {
    output += `.min-height${i + 1}${query}{min-height:${rems({config, value})};}\n`
  })

  maxs.forEach(function (value, i) {
    output += `.max-height${i + 1}${query}{max-height:${rems({config, value})};}\n`
  })

  viewports.forEach(function (value, i) {
    output += `.viewport-height${i + 1}${query}{height:${value}vh;}`
  })

  percents.forEach(function (value) {
    output += `.height${value}${query}{height:${value}%;}`
  })

  return output
}
