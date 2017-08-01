'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

// GET /apiclient/getnews 获取新闻信息
router.get('/', (req, res, next) => {
  let data = [{
    type: 'voice',
    title: '说起来，你想给MUJI提些什么意见？',
    subtitle: '也包括它最近跨界搞的那些副业',
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg', // 题图
    id: 'voice-2017-7-30' // 文章id
  }];
  setTimeout(function () {
    res.json({
      funs: data,
      message: 'success',
      success: true,
      count: 3,
      index: 1, // 第几次获取数据
      isEnd: false // 还有没有了
    });
  }, 0);
});

exports.default = router;
//# sourceMappingURL=funs.js.map