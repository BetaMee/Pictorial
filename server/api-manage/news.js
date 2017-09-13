import express from 'express';
import AV from 'leanengine';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

const Headline = AV.Object.extend('Headline');

// POST /apimanage/news/addheadline 增加新闻信息
router.post('/addheadline', upload.single('imgFile'), (req, res, next) => {
  const content = req.body;
  const imgFile = req.file;

  // 存储标题和链接
  const headline = new Headline();
  headline.set('pageTitle', content.pageTitle);
  headline.set('pageLink', content.pageLink);
  // 存储图片
  const file = new AV.File(imgFile.originalname, imgFile.buffer);
  file.save()
    .then((result) => {
      headline.set('imgUrl', result.url());
      headline.save()
        .then((hd) => {
          const response = {
            objectId: hd.id,
            pageLink: hd.get('pageLink'),
            pageTitle: hd.get('pageTitle'),
            imgUrl: hd.get('imgUrl'),
          };
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
    })
    .catch((err) => {
      res.json({
        success: false,
        message: err.message,
      });
    });
});

// POST /apimanage/news/deleheadline 删除头条信息
router.post('/deleheadline', (req, res, next) => {
  const { objectId } = req.body;
  // 执行 CQL 语句实现删除一个 Todo 对象
  AV.Query.doCloudQuery(`delete from Headline where objectId="${objectId}"`)
    .then((success) => {
      res.redirect('/apiclient/news/headline');
    })
    .catch((err) => {
      res.json({
        success: false,
        message: err.message,
      });
    });
});

export default router;
