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
var common = require('../common/common.js');

router.get('/', function(req, res) {
  let newsId = Number(req.query.news_id)

  getNewsApi(newsId).then(news => {
    res.json(news)
  }).catch(err => {
    res.status(500);
    res.json(
      common.apiErrorResponse('/news/', err, '', '取得に失敗しました。')
    )    
  })
});

router.get('/:id', function(req, res) {
  let page = 1
  let newsId = Number(req.params.id)

  if (req.query.page) {
    page = Number(req.query.page)
  }

  getNewsDetailApi(newsId, page).then(newsDetail => {
    res.json(newsDetail)
  }).catch(err => {
    res.status(500)
    res.json(
      common.apiErrorResponse('/news/' + req.params.id, err, '', '取得に失敗しました。')
    )    
  })
});

async function getNewsApi(newsId) {
  let resData = []
  let pickupNews = await scanNewsPickup()

  if (!newsId) {
    resData = resData.concat(pickupNews)
  }

  let create = undefined
  if (newsId) {
    let news = await getNews(newsId, ['create'])
    create = news.create
  }

  let news = await scanNews(create, newsId, pickupNews)
  resData = resData.concat(news)

  return resData
}

async function getNewsDetailApi(newsId, page) {
  let newsDetail = await getNewsDetail(newsId, page)
  return newsDetail
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

function getNews(newsId, attributes) {
  return new Promise((resolve, reject) => {
    var params = {
      TableName: 'news',
      Key: {
        "news_id": newsId
      }
    };

    if (attributes) {
      params['AttributesToGet'] = attributes
    }
    
    docClient.get(params, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data.Item)
      }
    });
  })
}

function getNewsDetail(newsId, page, attributes) {
  return new Promise((resolve, reject) => {
    var params = {
      TableName: 'news_detail',
      Key: {
        "news_id": newsId,
        "page": page
      }
    };

    if (attributes) {
      params['AttributesToGet'] = attributes
    }
    
    docClient.get(params, function (err, data) {
      if (err) {
        reject(err)
      } else {
        resolve(data.Item)
      }
    });
  })
}

module.exports = router;