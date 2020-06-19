const hs = require('hash-switch')

module.exports = function background (state) {
  state = state || {}
  const query = state.query || ''
  const config = state.config
  const colors = config.colors
  let output = `/* BACKGROUND */
.bg-unset{background-color:unset;}
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
      let variable = `${n}${i}`
      output += `.bg-${variable}${query}{background-color:var(--${variable});}\n`
    })
  }

  function visited (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'v' + i
      output += `.c-${variable}${query}:visited{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function hover (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'h' + i
      output += `.bg-${variable}${query}:hover{background-color:var(--${variable});}\n`
    })
  }

  function active (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'a' + i
      output += `.bg-${variable}${query}:active{background-color:var(--${variable});}\n`
      output += `.bg-${variable}${query}.active{background-color:var(--${variable});}\n`
    })
  }

  function disabled (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'd' + i
      output += `.bg-${variable}${query}:disabled{background-color:var(--${variable});}\n`
    })
  }

  return output
}
