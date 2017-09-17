import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './AppStore.js';
import createModule from '../lib/createModule.js'; // 创造代码分割模块

// 组件
import NavPanel from './Layout/NavPanel';
import Appbar from './Layout/Appbar';
import News from './Modules/News/view.js';
import NoMatch from './Layout/NoMatch';

// 样式
import './styles/base.css';
import S from './App.css';

const history = createBrowserHistory();

const Root = () => (
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <div className={S.base}>
        <NavPanel />
        <div className={S.main}>
          <Appbar />
          <Switch>
            <Route
              exact
              path="/dashboard"
              render={() => (
                <Redirect to="/dashboard/news" />
              )}
            />
            <Route path="/dashboard/news" component={News} />
            <Route path="/dashboard/voice" component={NoMatch} />
            <Route path="/dashboard/vote" component={NoMatch} />
            <Route path="/dashboard/guess" component={NoMatch} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
);


if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Root />, document.getElementById('app'));
