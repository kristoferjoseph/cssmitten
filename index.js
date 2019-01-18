var theme = require('./theme')
var typography = require('./typography')
var cursor = require('./cursor')
var layout = require('./layout')
var margin = require('./margin')
var padding = require('./padding')
var overflow = require('./overflow')
var visibility = require('./visibility')
var media = require('./media')
var utils = require('./utils')
var list = require('./list')

module.exports = function cssmitten (config) {
  if (!config) { return }
  config = JSON.parse(config)
  var queries = config.queries
  var output = theme(config)
  output += utils()
  output += list()
  output += cursor()
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
${layout({config, query})}
${margin({config, query})}
${padding({config, query})}
${overflow(query)}
${visibility(query)}`
}
