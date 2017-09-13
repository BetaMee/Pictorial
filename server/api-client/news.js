import express from 'express';
import AV from 'leanengine';


const router = express.Router();
// 查询头条信息
const queryHeadline = AV.Query('Headline');

// GET /apiclient/news 获取新闻信息
router.get('/', (req, res, next) => {
  let data = [{
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '如何做一个会开车的老司机？',
    tags: '美人志',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    src: 'http://img.ltn.com.tw/Upload/ent/page/800/2016/12/28/1930249_1.jpg',
    alt: '',
    title: '如何做一个会开车的老司机？',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
    tags: '男神志',
  },
  {
    src: 'http://img07.tooopen.com/images/20170630/tooopen_sy_215145383452.jpg',
    alt: '',
    title: '如何做一个会开车的老司机？',
    tags: '青年志',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '这样的「青春」一点都不吸引人',
    tags: '美食志',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    src: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    alt: '',
    title: '没有室友的暑假，你过得还好吗?',
    tags: 'have a chat',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
];
  setTimeout(function() {
    res.json({
      news: data,
      message: 'success',
      success: true,
      count: 5,
      index: 1, // 第几次获取数据
      isEnd: false, // 还有没有了
    });
  },0);
});

// GET /apiclient/news/headline 获取Slider信息
router.get('/headline', (req, res, next) => {
  const cql = 'select * from Headline';
  AV.Query.doCloudQuery(cql)
    // .find()
    .then((query) => {
      const results = query.results;
      const response = [];
      for (let i = 0; i < results.length; i++) {
        response.push({
          objectId: results[i].id,
          pageLink: results[i].get('pageLink'),
          pageTitle: results[i].get('pageTitle'),
          imgUrl: results[i].get('imgUrl'),
        });
      }
      res.json({
        success: true,
        message: '发送成功',
        data: response,
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        message: err.message,
      });
    });
});

export default router;
