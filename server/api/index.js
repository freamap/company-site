const news = require('./news.js')
const express = require('express')

const app = express()

app.use('/news', news)

app.use(function(req, res, next){
	res.status(404);
	res.end('API NOT FOUND : ' + req.path);
});

module.exports = {
  path: '/api',
  handler: app,
};
