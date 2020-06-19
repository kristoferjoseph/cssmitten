const hs = require('hash-switch')

module.exports = function color (state={}) {
  const query = state.query || ''
  const config = state.config
  const colors = config.colors
  let output = '\n/* COLOR */\n'
  const sm = hs({
    'link': link,
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
      output += `.c-${variable}${query}{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function link (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'l' + i
      output += `.c-${variable}${query}:link{color:var(--${variable});}/* ${color.label} */\n`
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
      output += `.c-${variable}${query}:hover{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function active (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'a' + i
      output += `.c-${variable}${query}:active{color:var(--${variable});}/* ${color.label} */\n`
      output += `.c-${variable}${query}.active{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function disabled (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'd' + i
      output += `.c-${variable}${query}:disabled{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  return output
}
