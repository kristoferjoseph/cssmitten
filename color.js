var colors = require('./colors')
module.exports = function color (query) {
  var output = '\n/* COLOR */\n'
  var variable
  var primary = colors.primary || []
  var hover = colors.hover || []
  var active = colors.active || []
  var disabled = colors.disabled || []

  primary.forEach(function (color, i) {
    variable = 'p' + i
    output += `.c-${variable}${query}{color:var(--${variable});}/* ${color.label} */\n`
  })

  hover.forEach(function (color, i) {
    variable = 'h' + i
    output += `.c-${variable}${query}:hover{color:var(--${variable});}/* ${color.label} */\n`
  })

  active.forEach(function (color, i) {
    variable = 'a' + i
    output += `.c-${variable}${query}:active{color:var(--${variable});}/* ${color.label} */\n`
    output += `.c-${variable}${query}[active=active]{color:var(--${variable});}/* ${color.label} */\n`
  })

  disabled.forEach(function (color, i) {
    variable = 'd' + i
    output += `.c-${variable}${query}:disabled{color:var(--${variable});}/* ${color.label} */\n`
  })

  return output
}
