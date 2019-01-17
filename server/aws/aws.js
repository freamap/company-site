var AWS = require('aws-sdk');

let awsConfig = {
  region: "ap-northeast-1",
  endpoint: process.env.DB_URL || 'http://localhost:8000',
  accessKeyId: process.env.ACCESS_KEY_ID || "123456789",
  secretAccessKey: process.env.SECRET_ACCESS_KEY_ID || ""
}

if (awsConfig.secretAccessKey === "") {
  awsConfig = {...awsConfig, endpoint: "http://localhost:8000" }
}

AWS.config.update(awsConfig);

module.exports = {
  docClient: new AWS.DynamoDB.DocumentClient()
}
