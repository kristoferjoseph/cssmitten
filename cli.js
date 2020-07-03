#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const arg = process.argv[2]
const configpath = arg || path.join(__dirname, './config.json')
const cssmitten = require('./')
const config = fs.readFileSync(configpath, 'utf-8')
process.stdout.write(cssmitten(config))
