var express = require('express');
var router = express.Router();
var common = require('../common/common.js');
var awsWork = require('../aws/work.js');

router.get('/', function(req, res) {
  getWorksApi().then(works => {
    res.json(works)
  }).catch(err => {
    res.status(500);
    res.json(
      common.apiErrorResponse(req.path, err, '', '取得に失敗しました。')
    )    
  })
});

router.get('/:id', function(req, res) {
  let page = 1
  let workId = Number(req.params.id)

  if (req.query.page) {
    page = Number(req.query.page)
  }

  getWorkDetailApi(workId, page).then(workDetail => {
    if (workDetail) {
      res.json(workDetail)
    } else {
      res.status(404)
      res.json(
        common.apiErrorResponse(req.path, '', '', '開発実績が存在しません')
      )
    }
  }).catch(err => {
    res.status(500)
    res.json(
      common.apiErrorResponse(req.path, err, '', '取得に失敗しました。')
    )
  })
});

async function getWorksApi() {
  let works = await awsWork.scanWorks()

  return works
}

async function getWorkDetailApi(workId, page) {
  let workDetail = await awsWork.getWorkDetail(workId, page)
  return workDetail
}

module.exports = router;