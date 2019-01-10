const news = require('./news.js')
const recruits = require('./recruits.js')
const works = require('./works.js')
const contact = require('./contact.js')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

app.use('/news', news)
app.use('/recruits', recruits)
app.use('/works', works)
app.use('/contact', contact)

app.use(function(req, res, next){
	res.status(404);
	res.end('API NOT FOUND : ' + req.path);
});

module.exports = {
  path: '/api',
  handler: app,
};
