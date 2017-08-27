import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './AppStore.js';
import createModule from '../lib/createModule.js'; // 创造代码分割模块

// 组件
import Panel from './Layout/Panel';
import Header from './Layout/Header';

// 样式
import S from './App.css';

const history = createBrowserHistory();

const Root = () => (
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <div className={S.base}>
        <div className={S.panel}>
          <Panel />
        </div>
        <div className={S.main}>
          <Header />
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
);

// const Root = () => (
//   <div className={S.base}>
//     Hello World
//   </div>
// );

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Root />, document.getElementById('app'));
