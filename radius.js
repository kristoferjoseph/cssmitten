module.exports = function radius (state) {
  state = state || {}
  var query = state.query || ''
  var config = state.config
  var radii = config.radii
  var output = `/* RADIUS */
.br-none${query}{border-radius:0;}
.br-100${query}{border-radius:100%;}
.br-pill${query}{border-radius:9999px;}
.b.br-tr0${query}{border-top-right-radius:0;}
.b.br-br0${query}{border-bottom-right-radius:0;}
.b.br-tl0${query}{border-top-left-radius:0;}
.b.br-bl0${query}{border-bottom-left-radius:0;}
`

  radii.map(function (r, i) {
    output += `.br${i}${query}{border-radius:${r}px;}\n`
  })
  return output
}
