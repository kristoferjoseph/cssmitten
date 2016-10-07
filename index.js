var variables = require('./variables')
var reset = require('./reset')
var margin = require('./margin')
var padding = require('./padding')
var styles =
`${variables}

${reset}

${margin}

${padding}`
console.log(styles)
