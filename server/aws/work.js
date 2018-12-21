var aws = require('./aws.js')

module.exports = {
  scanWorks: () => {
    return new Promise((resolve, reject) => {
      let params = {
        TableName: "work",
        IndexName: "SortOrderIndex",
        KeyConditionExpression: "#status = :status",
        ExpressionAttributeValues: {
          ":status": 1
        },
        ExpressionAttributeNames:{
          "#status": "status"
        }
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

  getWorkDetail: (workId, page) => {
    return new Promise((resolve, reject) => {
      var params = {
        TableName: 'work_detail',
        Key: {
          "work_id": workId,
          "page": page
        }
      };
      
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
