const reset = require('./reset')
const typeface = require('./typeface')
const variables = require('./variables')
const colors = require('./color')
const background = require('./background')
const gradient = require('./gradient')
const border = require('./border')
const fill = require('./fill')
const stroke = require('./stroke')

module.exports = function theme(config) {

  return `
/* ----- THEME ----- */
${variables({config})}
${reset()}
${typeface({config})}
${colors({config})}
${background({config})}
${gradient({config})}
${border({config})}
${fill({config})}
${stroke({config})}
`
}
