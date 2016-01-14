'use strict'

var fs = require('fs')
var url = require('url')
var express = require('express')
var app = express()

app.use(express.static('public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

var config = {
  '3.5': {

  },
  '5.5': {

  }
}

app.get('/', (req, res) => {
  var query = url.parse(req.url, true).query
  res.render('index', {
    imagePath: '/images/' + query.device + '/'
  })
})

app.listen(3000)
