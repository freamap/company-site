const news = require('./news.js')
const express = require('express')

const app = express()

app.use('/news', news)

module.exports = {
  path: '/api',
  handler: app,
};
