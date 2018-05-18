#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var arg = process.argv[2]
var configpath = arg || path.join(__dirname, './config.json')
var cssmitten = require('./')
var config = fs.readFileSync(configpath, 'utf-8')
process.stdout.write(cssmitten(config))
