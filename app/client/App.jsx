import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';


import Tab from './layout/Tab';
import News from './News/News';
import Labs from './Labs/Labs';

const Root = () => (
  <Router>
    <div>
      <Tab />
      <Route exact path="/" component={News} />
      <Route path="/labs" component={Labs} />
    </div>
  </Router>
);


if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Root />, document.getElementById('app'));
