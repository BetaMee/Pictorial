'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _news = require('./news');

var _news2 = _interopRequireDefault(_news);

var _funs = require('./funs');

var _funs2 = _interopRequireDefault(_funs);

var _wxoauth = require('./wxoauth');

var _wxoauth2 = _interopRequireDefault(_wxoauth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ClientAppRoute = app => {
  app.use('/apiclient/news', _news2.default);
  app.use('/apiclient/getfuns', _funs2.default);
};

exports.default = ClientAppRoute;
//# sourceMappingURL=index.js.map