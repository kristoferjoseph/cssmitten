var theme = require('./theme')
var typography = require('./typography')
var cursor = require('./cursor')
var layout = require('./layout')
var margin = require('./margin')
var padding = require('./padding')
var overflow = require('./overflow')
var visibility = require('./visibility')
var media = require('./media')
var defaults = require('./config')
var utils = require('./utils')

module.exports = function cssmitten (config) {
  config = config || defaults
  var queries = config.queries
  var output = theme(config)
  output += utils()
  output += cursor
  output += styles({config})

  Object.keys(queries)
    .map(
      function (query) {
        output += media(queries[query], styles({config, query}))
      }
    )

  return output
}

function styles (state) {
  state = state || {}
  var config = state.config || {}
  var query = state.query
  query = query ? query = `-${query}` : ''
  return `
${typography({config, query})}
${layout(query)}
${margin({config, query})}
${padding({config, query})}
${overflow(query)}
${visibility(query)}
`
}
