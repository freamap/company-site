var aws = require('./aws.js')

module.exports = {
  scanNewsPickup: () => {
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
    
      aws.docClient.query(params, function(err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data.Items)
        }
      })
    })
  },

  scanNews: (create, newsId, newsPickup) => {
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
  
      aws.docClient.query(params, function(err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data.Items)
        }
      })
    })
  },

  getNews: (newsId, attributes) => {
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
      
      aws.docClient.get(params, function (err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data.Item)
        }
      });
    })
  },

  getNewsDetail: (newsId, page, attributes) => {
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
      
      aws.docClient.get(params, function (err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(data.Item)
        }
      });
    })
  }  
}
