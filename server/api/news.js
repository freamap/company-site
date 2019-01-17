var express = require('express');
var router = express.Router();
var common = require('../common/common.js');
var awsNews = require('../aws/news.js');

router.get('/', function(req, res) {
  let newsId = Number(req.query.news_id)
  getNewsApi(newsId).then(news => {
    res.json(news)
  }).catch(err => {
    // res.status(500);
    // res.json(
    //   common.apiErrorResponse(req.path, err, '', '取得に失敗しました。')
    // )
    console.log('取得に失敗しました。')
    console.log(err)
    res.json([])
  })
});

router.get('/:id', function(req, res) {
  let page = 1
  let newsId = Number(req.params.id)

  if (req.query.page) {
    page = Number(req.query.page)
  }

  getNewsDetailApi(newsId, page).then(newsDetail => {
    if (newsDetail) {
      res.json(newsDetail)
    } else {
      res.status(404)
      res.json(
        common.apiErrorResponse(req.path, '', '', 'ニュースが存在しません')
      )
    }
  }).catch(err => {
    res.status(500)
    res.json(
      common.apiErrorResponse(req.path, err, '', '取得に失敗しました。')
    )    
  })
});

async function getNewsApi(newsId) {
  let resData = []
  let pickupNews = await awsNews.scanNewsPickup()

  if (!newsId) {
    resData = resData.concat(pickupNews)
  }

  let create = undefined
  if (newsId) {
    let news = await awsNews.getNews(newsId, ['create'])
    create = news.create
  }

  let news = await awsNews.scanNews(create, newsId, pickupNews)
  resData = resData.concat(news)

  return resData
}

async function getNewsDetailApi(newsId, page) {
  let newsDetail = await awsNews.getNewsDetail(newsId, page)
  return newsDetail
}

module.exports = router;