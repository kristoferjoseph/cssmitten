const hs = require('hash-switch')

module.exports = function color(state={}) {
  const query = state.query || ''
  const config = state.config
  const colors = config.colors
  let output = `
/* COLOR */
.text-current${query}{color:currentColor;}/* current color */
.text-transparent${query}{color:transparent;}/* transparent */
`
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
      output += `.text-${variable}${query}{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function link (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'l' + i
      output += `.text-${variable}${query}:link{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function visited (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'v' + i
      output += `.text-${variable}${query}:visited{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function hover (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'h' + i
      output += `.text-${variable}${query}:hover{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function active (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'a' + i
      output += `.text-${variable}${query}:active{color:var(--${variable});}/* ${color.label} */\n`
      output += `.text-${variable}${query}.active{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function disabled (a) {
    a = a || []
    a.forEach(function (color, i) {
      let variable = 'd' + i
      output += `.text-${variable}${query}:disabled{color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  return output
}
