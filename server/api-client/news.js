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
  }];
  setTimeout(function() {
    res.json({
      news: data,
      message: 'success',
      success: true,
    });
  },0);
});

export default router;
