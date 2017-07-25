import express from 'express';

const router = express.Router();

// GET /apiclient/getnews 获取新闻信息
router.get('/', (req, res, next) => {
  let data = [{
    img: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    title: '如何做一个会开车的老司机？',
    tags: '美人志',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    img: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    title: '如何做一个会开车的老司机？',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
    tags: '男神志',
  },
  {
    img: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    title: '如何做一个会开车的老司机？',
    tags: '青年志',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    img: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    title: '这样的「青春」一点都不吸引人',
    tags: '美食志',
    link: 'http://mp.weixin.qq.com/s/x6gThK7UjNcWreAuKjItww',
  },
  {
    img: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
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

export default router;
