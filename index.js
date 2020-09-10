const theme = require('./theme')
const typography = require('./typography')
const cursor = require('./cursor')
const layout = require('./layout')
const margin = require('./margin')
const padding = require('./padding')
const overflow = require('./overflow')
const visibility = require('./visibility')
const objectFit = require('./object-fit')
const objectPosition = require('./object-position')
const outline = require('./outline')
const opacity = require('./opacity')
const container = require('./container')
const media = require('./media')
const userSelect = require('./user-select')

module.exports = function cssmitten (props) {
  let config
  try {
    config = JSON.parse(props)
  } catch(err) {
    throw new Error('Unable to parse config.json')
  }
  let queries = config.queries
  let output = theme(config)
  output += styles({config})

  Object.keys(queries)
    .map(
      function (query) {
        output += media(queries[query], styles({config, query}))
      }
    )

  return output
}

function styles (state={}) {
  let config = state.config || {}
  let queries = config.queries || {}
  let query = state.query || ''
  let label = query
    ? `-${query}`
    : ''
  let width = queries[query]
  return `
${container({width, label})}
${typography({config, label})}
${layout({config, label})}
${margin({config, label})}
${padding({config, label})}
${overflow(label)}
${visibility(label)}
${objectFit(label)}
${objectPosition(label)}
${outline(label)}
${opacity(label)}
${cursor(label)}
${userSelect(label)}
`
}
