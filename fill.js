module.exports = function fill (state={}) {
  const query = state.query || ''
  return `
/* FILL */
.fill-none${query}{fill:none;}
.fill-current${query}{fill:currentColor;}
`
}
