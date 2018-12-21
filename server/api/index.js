const news = require('./news.js')
const recruits = require('./recruits.js')
const express = require('express')

const app = express()

app.use('/news', news)
app.use('/recruits', recruits)

app.use(function(req, res, next){
	res.status(404);
	res.end('API NOT FOUND : ' + req.path);
});

module.exports = {
  path: '/api',
  handler: app,
};
