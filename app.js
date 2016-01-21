'use strict'

var fs = require('fs')
var url = require('url')
var chalk = require('chalk')
var express = require('express')
var _ = require('underscore')
var app = express()

app.use(express.static('public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

var config = {
  '3.5': {
    width: '640px',
    screenshotWidth: '440px',
    titleHeight: '150px',
    fontSize: '40px'
  },
  '4': {
    width: '640px',
    screenshotWidth: '459px',
    titleHeight: '200px',
    fontSize: '40px'
  },
  '4.7': {
    width: '750px',
    screenshotWidth: '537px',
    titleHeight: '240px',
    fontSize: '45px'
  },
  '5.5': {
    width: '1242px',
    screenshotWidth: '890px',
    titleHeight: '390px',
    fontSize: '80px'
  },
  'android': {
    width: '1242px',
    screenshotWidth: '890px',
    titleHeight: '470px',
    fontSize: '80px'
  }
}

app.get('/', (req, res) => {
  var query = url.parse(req.url, true).query
  var appConfig = require('./public/images/' + query.app + '/config.json')
  res.render('index', {
    query: query,
    config: _.extend(config[query.device], appConfig)
  })
})

app.listen(3000)

console.log('NodeJS web service is running...')
console.log('Next step: Run ' + chalk.magenta('sh build.sh YOUR_APP_NAME') + ' to generate your styled screenshot.')
