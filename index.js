var variables = require('./variables')
var reset = require('./reset')
var theme = require('./theme')
var typeface = require('./typeface')
var typography = require('./typography')
var border = require('./border')
var layout = require('./layout')
var margin = require('./margin')
var padding = require('./padding')
var overflow = require('./overflow')
var fontName = 'Mark'
var fontBase = '16px'
var media = require('./media')
var queries = require('./queries')

function cssmitten() {
  var output = `${variables()}
${reset()}
${typeface(fontBase,fontName)}
${content()}`

  Object.keys(queries).forEach(
    function(query) {
      query = query || ''
      var label = query ? `-${query}` : ''

      output += media(
        queries[query],
        content(label)
      )
    }
  )

  return output
}

function content(label) {
  label = label || ''
  return `${typography(label)}
${theme(label)}
${layout(label)}
${margin(label)}
${padding(label)}
${overflow(label)}`
}

console.log(cssmitten())
