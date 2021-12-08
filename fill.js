module.exports = function fill (state={}) {
  const query = state.query || ''
  return /*css*/`
/* FILL */
.fill-none${query}{fill:none;}
.fill-current${query}{fill:currentColor;}
`
}
