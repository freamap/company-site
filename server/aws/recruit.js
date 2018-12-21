var aws = require('./aws.js')

module.exports = {
  scanRecruits: () => {
    return new Promise((resolve, reject) => {
      let params = {
        TableName: "recruit",
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

  getRecruitDetail: (recruitId) => {
    return new Promise((resolve, reject) => {
      var params = {
        TableName: 'recruit_detail',
        Key: {
          "recruit_id": recruitId
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
