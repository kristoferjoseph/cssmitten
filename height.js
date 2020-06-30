const rems = require('./rems')

module.exports = function height(state={}) {
  let config = state.config
  let query = state.label
  let ascending = (a, b) => a > b
  let params = config.height || {}
  let mins = params.mins
    ? mins.sort(ascending)
    : []
  let maxs = params.max
    ? maxs.sort(ascending)
    : []
  let viewports = params.viewport
    ? viewports.sort(ascending)
    : []
  let percents = params.percent
    ? percents.sort(ascending)
    : []

  let output = `
/* HEIGHT */
.h0${query}{height:0;}
.h-auto${query}{height:auto;}
.h100${query}{height:100%;}
.vh0${query}{height:0vh;}
.vh100${query}{height:100vh;}
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
