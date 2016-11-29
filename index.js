var theme = require('./theme')
var typography = require('./typography')
var border = require('./border')
var layout = require('./layout')
var margin = require('./margin')
var padding = require('./padding')
var overflow = require('./overflow')

function cssmitten() {

  return `${theme()}
${typography()}
${layout()}
${margin()}
${padding()}
${overflow()}`

}

console.log(cssmitten())
