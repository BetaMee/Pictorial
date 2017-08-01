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
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '如何做一个会开车的老司机？',
    tags: '美人志',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww'
  }, {
    src: 'http://img.ltn.com.tw/Upload/ent/page/800/2016/12/28/1930249_1.jpg',
    alt: '',
    title: '如何做一个会开车的老司机？',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
    tags: '男神志'
  }, {
    src: 'http://img07.tooopen.com/images/20170630/tooopen_sy_215145383452.jpg',
    alt: '',
    title: '如何做一个会开车的老司机？',
    tags: '青年志',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww'
  }, {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '这样的「青春」一点都不吸引人',
    tags: '美食志',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww'
  }, {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww'
  }, {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww'
  }, {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww'
  }, {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww'
  }, {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww'
  }, {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww'
  }, {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww'
  }, {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww'
  }];
  setTimeout(function () {
    res.json({
      news: data,
      message: 'success',
      success: true,
      count: 5,
      index: 1, // 第几次获取数据
      isEnd: false // 还有没有了
    });
  }, 0);
});

exports.default = router;
//# sourceMappingURL=news.js.map