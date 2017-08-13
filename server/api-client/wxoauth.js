import express from 'express';

const router = express.Router();

var OAuth = require('wechat-oauth');
var api = new OAuth(
  'wxf5efd4c17206a586', 
  'e5ee1a94ed8b4d12a4bf619145f7595d',function(openid, callback){

  },function(openid, token, callback) {

  });


// GET /apiclient/getnews 获取新闻信息
router.get('/', (req, res, next) => {
  let url = api.getAuthorizeURL('redirectUrl', 'state', 'scope')
  res.send(url);
});

export default router;
