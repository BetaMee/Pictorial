import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// 使用react-router的代码分割
import Bundle from '../lib/bundle';

import Tab from './layout/Tab';
import News from './News/News';
import Labs from 'bundle-loader?lazy&name=client-[name]!./Labs/Labs.jsx'; // 按这个格式来，&name=client是指定chunkName的名字，webpack会处理
// import Labs from './Labs/Labs';


const BundleLabs = () => {
  <Bundle load={Labs}>
    {(BundleLabs) => <BundleLabs />}
  </Bundle>
}

const Root = () => (
  <Router>
    <div>
      <Tab />
      <Route exact path="/" component={News} />
      <Route path="/labs" component={BundleLabs}  />
    </div>
  </Router>
);


if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Root />, document.getElementById('app'));
