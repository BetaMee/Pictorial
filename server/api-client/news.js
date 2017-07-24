import express from 'express';

const router = express.Router();

// GET /apiclient/getnews 获取新闻信息
router.get('/', (req, res, next) => {
  let data = [{
    img: 'hhhh',
    title: 'hhhhh',
    tags: 'hhhh',
  },
  {
    img: 'gggg',
    title: 'gggg',
    tags: 'gggg',
  },
  {
    img: 'gggg',
    title: 'gggg',
    tags: 'gggg',
  },
  {
    img: 'gggg',
    title: 'gggg',
    tags: 'gggg',
  },
  {
    img: 'gggg',
    title: 'gggg',
    tags: 'gggg',
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
