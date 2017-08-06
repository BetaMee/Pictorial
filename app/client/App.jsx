import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Redirect,
} from 'react-router-dom';

// readux
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import configureStore from './AppStore.js';
import createModule from '../lib/createModule.js'; // 创造代码分割模块

// 组件
import Tab from './Layout/Tab';
import GlobalLoading from './Layout/GlobalLoading';
// 按这个格式来，&name=client是指定chunkName的名字，webpack会处理
import News from 'bundle-loader?lazy&name=news-[name]!./Modules/News/view.js';
import Funs from 'bundle-loader?lazy&name=funs-[name]!./Modules/Funs/view.js';
// 动画组件
import FadeTransition from './Layout/FadeTransition';
// 全局CSS
import S from './App.css';

const history = createBrowserHistory();

// /**
//  * code spliting
//  * @param {*} Component
//  */
// const createModule = Component => () => (
//   <Bundle load={Component}>
//     {Mod => (Mod ? <Mod /> : <Loading />)}
//   </Bundle>
// );

const Root = () => (
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <div className={S.base}>
        <Tab />
        <Route
          exact
          path="/"
          render={() => (
            <Redirect to="/news" />
          )}
        />
        <FadeTransition path="/news" component={createModule(News, GlobalLoading)} />
        <FadeTransition path="/funs" component={createModule(Funs, GlobalLoading)} />
      </div>
    </ConnectedRouter>
  </Provider>
);

// 开发环境热替换
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Root />, document.getElementById('app'));
