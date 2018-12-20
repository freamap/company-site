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
  let create = req.query.create
  let newsId = Number(req.query.news_id)

  getNews(create, newsId).then(news => {
    res.json(news)
  }).catch(err => {
    console.log(err)
    res.json("取得に失敗しました。")    
  })
});

async function getNews(create, newsId) {
  let newsPickup = await scanNewsPickup()
  let news = await scanNews(create, newsId, newsPickup)

  return news
}

function scanNewsPickup() {
  return new Promise((resolve, reject) => {
    let params = {
      TableName: "news_pickup"
    };
  
    docClient.scan(params, function(err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data.Items)
      }
    })
  })
}

function scanNews(create, newsId, newsPickup) {
  return new Promise((resolve, reject) => {
    let limit = 3
    if (!create || !newsId) {
      limit = limit - newsPickup.length
    }

    let params = {
      TableName: "news",
      IndexName: "SortCreateIndex",
      KeyConditionExpression: "#status = :statusCode",
      ExpressionAttributeValues: {
        ":statusCode": 1
      },
      ExpressionAttributeNames:{
        "#status": "status"
      },
      ScanIndexForward: false,
      Limit: limit
    };

    if (create && newsId) {
      params["ExclusiveStartKey"] = {
        create: create,
        news_id: newsId,
        status: 1
      }
    }

    docClient.query(params, function(err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data.Items)
      }
    })
  })
}

module.exports = router;