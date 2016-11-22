var reset = require('./reset')
var typography = require('./typography')
var background = require('./background')
var border = require('./border')
var layout = require('./layout')
var margin = require('./margin')
var padding = require('./padding')
var styles =
`${reset}
${typography}
${background}
${border}
${layout}
${margin}
${padding}`
console.log(styles)
