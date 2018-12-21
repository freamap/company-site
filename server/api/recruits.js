var express = require('express');
var router = express.Router();
var common = require('../common/common.js');
var awsRecruit = require('../aws/recruit.js');

router.get('/', function(req, res) {
  getRecruitsApi().then(recruits => {
    res.json(recruits)
  }).catch(err => {
    res.status(500);
    res.json(
      common.apiErrorResponse(req.path, err, '', '取得に失敗しました。')
    )    
  })
});

router.get('/:id', function(req, res) {
  let recruitId = Number(req.params.id)

  getRecruitDetailApi(recruitId).then(recruitDetail => {
    if (recruitDetail) {
      res.json(recruitDetail)
    }
    res.status(404)
    res.json(
      common.apiErrorResponse(req.path, '', '', '採用情報が存在しません')
    )
  }).catch(err => {
    res.status(500)
    res.json(
      common.apiErrorResponse(req.path, err, '', '取得に失敗しました。')
    )
  })
});

async function getRecruitsApi() {
  let recruits = await awsRecruit.scanRecruits()

  return recruits
}

async function getRecruitDetailApi(reqruitId) {
  let reqruitDetail = await awsRecruit.getRecruitDetail(reqruitId)
  return reqruitDetail
}

module.exports = router;