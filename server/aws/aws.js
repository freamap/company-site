var AWS = require('aws-sdk');
AWS.config.update({
  region: "ap-northeast-1",
  endpoint: process.env.DB_URL || 'http://localhost:8000',
  accessKeyId: process.env.ACCESS_KEY_ID || "123456789",
  secretAccessKey: process.env.SECRET_ACCESS_KEY_ID || ""
});

module.exports = {
  docClient: new AWS.DynamoDB.DocumentClient()
}
