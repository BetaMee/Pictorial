'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _news = require('./news');

var _news2 = _interopRequireDefault(_news);

var _funs = require('./funs');

var _funs2 = _interopRequireDefault(_funs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ClientAppRoute = app => {
  app.use('/apiclient/getnews', _news2.default);
  app.use('/apiclient/getfuns', _funs2.default);
};

exports.default = ClientAppRoute;
//# sourceMappingURL=index.js.map