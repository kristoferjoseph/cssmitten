var colors = require('./colors')
module.exports = function stroke (query) {
  var output = '/* STROKE */\n'
  var variable
  var primary = colors.primary || []
  var hover = colors.hover || []
  var active = colors.active || []
  var disabled = colors.disabled || []

  primary.forEach(function (color, i) {
    variable = 'p' + i
    output += `.s-${variable}${query}{stroke:var(--${variable});}/* ${color.label} */\n`
  })

  hover.forEach(function (color, i) {
    variable = 'h' + i
    output += `.s-${variable}${query}:hover{stroke:var(--${variable});}/* ${color.label} */\n`
  })

  active.forEach(function (color, i) {
    variable = 'a' + i
    output += `.s-${variable}${query}:active{stroke:var(--${variable});}/* ${color.label} */\n`
    output += `.s-${variable}${query}[active=active]{stroke:var(--${variable});}/* ${color.label} */\n`
  })

  disabled.forEach(function (color, i) {
    variable = 'd' + i
    output += `.s-${variable}${query}:disabled{stroke:var(--${variable});}/* ${color.label} */\n`
  })

  return output
}
