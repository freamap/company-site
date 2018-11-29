var express = require('express');
var router = express.Router();

const news = []

router.get('/', function(req, res, next) {
  res.json(news)
});

module.exports = router;