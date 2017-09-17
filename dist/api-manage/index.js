'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _news = require('./news');

var _news2 = _interopRequireDefault(_news);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import funs from './funs';
// import oauth from './wxoauth';

const ClientAppRoute = app => {
  app.use('/apimanage/news', _news2.default);
  // app.use('/apiclient/getfuns', funs);
  // app.use('/apiclient/wxoauth', oauth);
};

exports.default = ClientAppRoute;
//# sourceMappingURL=index.js.map