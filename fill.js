const hs = require('hash-switch')

module.exports = function fill (state={}) {
  const query = state.query || ''
  const config = state.config
  const colors = config.colors
  let output = `/* FILL */
.f-none{fill:none;}
`
  var sm = hs({
    'visited': visited,
    'hover': hover,
    'active': active,
    'disabled': disabled
  }, handler)

  Object.keys(colors)
    .forEach(k => sm(k, colors[k], k.charAt(0)
      .toLowerCase()
    )
  )

  function handler (a, n) {
    a = a || []
    a.forEach(function (color, i) {
      variable = `${n}${i}`
      output += `.f-${variable}${query}{fill:var(--${variable});}/* ${color.label} */\n`
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
      output += `.f-${variable}${query}:hover{fill:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function active (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'a' + i
      output += `.f-${variable}${query}:active{fill:var(--${variable});}/* ${color.label} */\n`
      output += `.f-${variable}${query}.active{fill:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function disabled (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'd' + i
      output += `.f-${variable}${query}:disabled{fill:var(--${variable});}/* ${color.label} */\n`
    })
  }

  return output
}
