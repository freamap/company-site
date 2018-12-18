var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
AWS.config.update({
  region: "ap-northeast-1",
  endpoint: process.env.DB_URL || 'http://localhost:8000',
  accessKeyId: process.env.ACCESS_KEY_ID || "123456789",
  secretAccessKey: process.env.SECRET_ACCESS_KEY_ID || ""
});
var docClient = new AWS.DynamoDB.DocumentClient();

router.get('/', function(req, res, next) {
  var table = "news";

  var params = {
      TableName: table,
  };

  docClient.scan(params, function(err, data) {
    if (err) {
      res.json(console.log(err))
    } else {
      res.json(data.Items)
    }
  });
});

module.exports = router;