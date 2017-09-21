var theme = require('./theme')
var typography = require('./typography')
var cursor = require('./cursor')
var layout = require('./layout')
var margin = require('./margin')
var padding = require('./padding')
var overflow = require('./overflow')
var visibility = require('./visibility')
var media = require('./media')
var queries = require('./queries')
var utils = require('./utils')

function cssmitten() {
  var i = 0
  var output = theme()
  output += utils()
  output += cursor
  output += styles()

  Object.keys(queries)
    .map(
      function(query) {
        output += media(queries[query], styles(query))
      }
    )

  return output
}

function styles(query) {
  query = query ? query = `-${query}` : ''
  return `
${typography(query)}
${layout(query)}
${margin(query)}
${padding(query)}
${overflow(query)}
${visibility(query)}
`

}

console.log(cssmitten())
