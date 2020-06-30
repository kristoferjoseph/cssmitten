module.exports = function fill (state={}) {
  const query = state.query || ''
  return `
/* FILL */
.fill-none{fill:none;}
.fill-cuttent${query}{fill:currentColor;}
`
}
