'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _news = require('./news');

var _news2 = _interopRequireDefault(_news);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ClientAppRoute = app => {
  app.use('/apiclient/getnews', _news2.default);
};

exports.default = ClientAppRoute;
//# sourceMappingURL=index.js.map