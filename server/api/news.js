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
  let newsId = Number(req.query.news_id)
  console.log(newsId)

  getNews(newsId).then(news => {
    res.json(news)
  }).catch(err => {
    console.log(err)
    let common = require('../common/common.js');
    
    res.json(
      common.createApiErrorResponse('', '取得に失敗しました。')
    )    
  })
});

async function getNews(newsId) {
  let resData = []
  let pickupNews = await scanNewsPickup()

  if (!newsId) {
    resData = resData.concat(pickupNews)
  }

  let create = undefined
  if (newsId) {
    create = await getNewsCreate(newsId)
  }

  let news = await scanNews(create, newsId, pickupNews)
  resData = resData.concat(news)

  return resData
}

function scanNewsPickup() {
  return new Promise((resolve, reject) => {
    let params = {
      TableName: "news",
      IndexName: "PickupSortCreateIndex",
      KeyConditionExpression: "#pickup = :pickupCode",
      ExpressionAttributeValues: {
        ":pickupCode": 1
      },
      ExpressionAttributeNames:{
        "#pickup": "pickup"
      },
      ScanIndexForward: false
    };
  
    docClient.query(params, function(err, data) {
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

    if (newsPickup.length > 0) {
      limit = limit - newsPickup.length
    }

    let params = {
      TableName: "news",
      IndexName: "PickupSortCreateIndex",
      KeyConditionExpression: "#pickup = :pickupCode",
      ExpressionAttributeValues: {
        ":pickupCode": 0
      },
      ExpressionAttributeNames:{
        "#pickup": "pickup"
      },
      ScanIndexForward: false,
      Limit: limit
    };

    if (create && newsId) {
      params["ExclusiveStartKey"] = {
        create: create,
        news_id: newsId,
        pickup: 0
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

function getNewsCreate(newsId) {
  return new Promise((resolve, reject) => {
    var params = {
      TableName: 'news',
      Key: {
        "news_id": newsId
      },
      AttributesToGet: [
        "create"
      ]
    };
    
    docClient.get(params, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data.Item.create)
      }
    });
  })
}
module.exports = router;