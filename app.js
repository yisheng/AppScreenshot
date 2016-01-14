'use strict'

var fs = require('fs')
var url = require('url')
var express = require('express')
var _ = require('underscore')
var app = express()

app.use(express.static('public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

var config = {
  '3.5': {

  },
  '5.5': {
    'width': '1242px',
    'height': '',
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
