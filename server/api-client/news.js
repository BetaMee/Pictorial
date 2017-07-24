import express from 'express';

const router = express.Router();

// GET /apiclient/getnews 获取新闻信息
router.get('/', (req, res, next) => {
  let data = [{
    img: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    title: 'hhhhh',
    tags: 'hhhh',
  },
  {
    img: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    title: 'gggg',
    tags: 'gggg',
  },
  {
    img: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    title: 'gggg',
    tags: 'gggg',
  },
  {
    img: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
    title: 'gggg',
    tags: 'gggg',
  },
  {
    img: 'http://www.fotor.com/images2/features/photo_effects/e_bw.jpg',
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
