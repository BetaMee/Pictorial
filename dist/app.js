'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _connectTimeout = require('connect-timeout');

var _connectTimeout2 = _interopRequireDefault(_connectTimeout);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _leanengine = require('leanengine');

var _leanengine2 = _interopRequireDefault(_leanengine);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _view = require('./view/view');

var _index = require('./api-client/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./api-manage/index');

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 加载云函数定义，你可以将云函数拆分到多个文件方便管理，但需要在主文件中加载它们
// require('./cloud/cloud.js');

// Client路由
const app = (0, _express2.default)();
// 生成客户端HTML视图


app.use(_express2.default.static(_path2.default.resolve(__dirname, '../build')));

// 设置默认超时时间
app.use((0, _connectTimeout2.default)('15s'));

// 加载云引擎中间件
app.use(_leanengine2.default.express());

app.enable('trust proxy');
// 需要重定向到 HTTPS 可去除下一行的注释。
// app.use(AV.Cloud.HttpsRedirect());

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// 热加载热替换在开发环境下的配置
if (process.env.NODE_ENV === 'development') {
  // 开发模式下
  const webpackconfig = require('../webpack.config.dev.js');
  const compiler = (0, _webpack2.default)(webpackconfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackconfig.output.publicPath,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

(0, _index2.default)(app);
(0, _index4.default)(app);

app.get('*', (req, res, next) => {
  if (/^\/dashboard/.test(req.path)) {
    const html = (0, _view.RenderManagePage)(process.env.NODE_ENV);
    res.status(200).end(html);
  } else {
    const html = (0, _view.RenderClientPage)(process.env.NODE_ENV);
    res.status(200).end(html);
  }
});

app.use((req, res, next) => {
  // 如果任何一个路由都没有返回响应，则抛出一个 404 异常给后续的异常处理器
  if (!res.headersSent) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

// error handlers
app.use((err, req, res, next) => {
  if (req.timedout && req.headers.upgrade === 'websocket') {
    // 忽略 websocket 的超时
    return;
  }

  var statusCode = err.status || 500;
  if (statusCode === 500) {
    console.error(err.stack || err);
  }
  if (req.timedout) {
    console.error('请求超时: url=%s, timeout=%d, 请确认方法执行耗时很长，或没有正确的 response 回调。', req.originalUrl, err.timeout);
  }
  res.status(statusCode);
  // 默认不输出异常详情
  var error = {};
  if (app.get('env') === 'development') {
    // 如果是开发环境，则将异常堆栈输出到页面，方便开发调试
    error = err;
  }
  res.send(err);
});

module.exports = app;
//# sourceMappingURL=app.js.map