import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom';

// 组件
import SetSlider from './SetSlider';
import SetList from './SetList';
import NoMatch from '../../../Layout/NoMatch';
// 样式
import S from './News.css';

class News extends React.Component {
  render() {
    return (
      <div className={S.container}>
        <div className={S.content}>
        </div>
        <div className={S.action}>
          <ul className={S.navbar}>
            <li><NavLink activeClassName={S.navbaractive} to="/dashboard/news/set-slider">配置Slider</NavLink></li>
            <li><NavLink activeClassName={S.navbaractive} to="/dashboard/news/set-list">配置列表</NavLink></li>
          </ul>
          <Switch>
            <Route
              exact
              path="/dashboard/news"
              render={() => (
                <Redirect to="/dashboard/news/set-slider" />
              )}
            />
            <Route path="/dashboard/news/set-slider" component={SetSlider} />
            <Route path="/dashboard/news/set-list" component={SetList} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default News;
