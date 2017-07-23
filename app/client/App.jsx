import React from 'react';
import ReactDOM from 'react-dom';
import {
  // BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// readux
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './store/store';
// 使用react-router的代码分割
import Bundle from '../lib/bundle';

// 组件
import Tab from './components/layout/Tab';
import Loading from './components/layout/Loading';
import News from './views/news/News';
import Labs from 'bundle-loader?lazy&name=[name]!./views/Labs/Labs'; // 按这个格式来，&name=client是指定chunkName的名字，webpack会处理


const history = createBrowserHistory();

const createModule = Component => () => (
  <Bundle load={Component}>
    {Mod => (Mod ? <Mod /> : <Loading />)}
  </Bundle>
);

const Root = () => (
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <div>
        <Tab />
        <Route exact path="/" component={News} />
        <Route path="/labs" component={createModule(Labs)} />
      </div>
    </ConnectedRouter>
  </Provider>
);


ReactDOM.render(<Root />, document.getElementById('app'));
