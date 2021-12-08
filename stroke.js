module.exports = function stroke(state={}) {
  const query = state.query || ''
  return /*css*/`
/* STROKE */
.stroke-none${query}{stroke:none;}
.stroke-current${query}{stroke:currentColor;}
  `
}
