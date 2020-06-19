const hs = require('hash-switch')
const radius = require('./radius')

module.exports = function border (state={}) {
  const query = state.query || ''
  const config = state.config
  const colors = config.colors
  let output = `/* BORDER */
.b-none${query}{border:none;}
.b-t-none${query}{border-top:none;}
.b-r-none${query}{border-right:none;}
.b-b-none${query}{border-bottom:none;}
.b-l-none${query}{border-left:none;}
.b${query}{border: 1px solid;}
.b-t${query}{border-top: 1px solid;}
.b-r${query}{border-right: 1px solid;}
.b-b${query}{border-bottom: 1px solid;}
.b-l${query}{border-left: 1px solid;}
`
  const sm = hs({
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
    a.forEach((color, i) => {
        let variable = `${n}${i}`
        output += `.b-${variable}${query}{border-color:var(--${variable});}/* ${color.label} */\n`
      })
  }

  function hover (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'h' + i
      output += `.b-${variable}${query}:hover{border-color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function active (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'a' + i
      output += `.b-${variable}${query}:active{border-color:var(--${variable});}/* ${color.label} */\n`
      output += `.b-${variable}${query}.active{border-color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  function disabled (a) {
    a = a || []
    a.forEach(function (color, i) {
      variable = 'd' + i
      output += `.b-${variable}${query}:disabled{border-color:var(--${variable});}/* ${color.label} */\n`
    })
  }

  output += '\n'
  output += radius({config, query})
  return output
}
