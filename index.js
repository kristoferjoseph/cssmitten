var theme = require('./theme')
var typography = require('./typography')
var border = require('./border')
var layout = require('./layout')
var margin = require('./margin')
var padding = require('./padding')
var overflow = require('./overflow')
var media = require('./media')
var queries = require('./queries')

function cssmitten() {
  var i = 0
  var output = theme()
  output += styles()

  Object.keys(queries)
    .map(
      function(query) {
        output += styles(query, queries[query])
      }
    )

  return output
}

function styles(query, size) {
  var content = `${typography(query)}
${layout(query)}
${margin(query)}
${padding(query)}
${overflow(query)}`
  return media(size, content)
}

console.log(cssmitten())
