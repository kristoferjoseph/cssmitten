var hs = require('hash-switch')

module.exports = function color (state) {
  state = state || {}
  var query = state.query || ''
  var config = state.config
  var colors = config.colors
  var output = '\n/* COLOR */\n'
  var variable
  var sm = hs({
    'link': link,
    'visited': visited,
    'hover': hover,
    'active': active,
    'disabled': disabled
  }, handler)

  Object.keys(colors).forEach(k => sm(k, colors[k], k.charAt(0).toLowerCase()))

  function handler (a, n) {
    a = a || []
    a.forEach(function (color, i) {
      variable = `${n}${i}`
      output += `.c-${variable}${query}{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function link (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'l' + i
      output += `.c-${variable}${query}:link{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function visited (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'v' + i
      output += `.c-${variable}${query}:visited{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function hover (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'h' + i
      output += `.c-${variable}${query}:hover{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function active (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'a' + i
      output += `.c-${variable}${query}:active{color:var(--${variable});}/* ${color.label} */\n`
      output += `.c-${variable}${query}.active{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function disabled (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'd' + i
      output += `.c-${variable}${query}:disabled{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  return output
}
