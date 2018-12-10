var express = require('express');
var router = express.Router();
var config = require('config');

router.get('/', function(req, res, next) {
  let news = [
    process.env.DB_URL,
    process.env.NODE_ENV,
    config.db.test
  ]

  res.json(news)
});

module.exports = router;