var reset = require('./reset')
var typography = require('./typography')
var typeface = require('./typeface')
var background = require('./background')
var border = require('./border')
var layout = require('./layout')
var margin = require('./margin')
var padding = require('./padding')
var overflow = require('./overflow')
var fontName = 'Mark'
var fontBase = '16px'
var styles =
`${reset()}
${typeface(fontBase,fontName)}
${typography()}
${background()}
${border()}
${layout()}
${margin()}
${padding()}
${overflow()}`
console.log(styles)
