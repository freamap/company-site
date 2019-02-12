var express = require('express');
var axios = require('axios');
var router = express.Router();

router.post('/', function(req, res) {
  contact(req.body.title, req.body.name, req.body.mailAddress, req.body.body).then(response => {
    res.json({result: 'success'})
  }).catch(error => {
    console.log(error)
    res.json({result: 'error'})
  })
});

async function contact(title, name, mailAddress, body) {
  let text = "要件：" + title + "\n名前：" + name + "\nメールアドレス：" + mailAddress + "\n本文：" + body
  await axios.post(process.env.SLACK_URL, {
    text: text
  })
}

module.exports = router;