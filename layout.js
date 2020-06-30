const position = require('./position')
const display = require('./display')
const width = require('./width')
const height = require('./height')
const flex = require('./flex')
const grid = require('./grid')

module.exports = function layout(state={}) {
  let query = state.label
  return `
/* -----  LAYOUT ----- */

${position(query)}
${display(query)}
${width(state)}
${height(state)}
${flex(query)}
${grid(state)}
`
}
