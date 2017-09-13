import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  NavLink,
} from 'react-router-dom';

// 组件
import SetSlider from './SetSlider';
import ShowSlider from './ShowSlider';
import SetList from './SetList';
import NoMatch from '../../../Layout/NoMatch';
// 样式
import S from './News.css';

class News extends React.Component {
  render() {
    const { postHeadline, getHeadline, deleHeadlineById, news } = this.props;
    return (
      <div className={S.container}>
        <div className={S.content}>
          <Switch>
            <Route
              exact
              path="/dashboard/news"
              render={() => (
                <Redirect to="/dashboard/news/set-slider" />
              )}
            />
            <Route
              path="/dashboard/news/set-slider"
              render={
                props => (
                  <ShowSlider
                    {...props}
                    getHeadline={getHeadline}
                    deleHeadlineById={deleHeadlineById}
                    setStatus={news.sliderSet}
                    sliderShow={news.sliderShow}
                  />)
              }
            />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <div className={S.action}>
          <ul className={S.navbar}>
            <li><NavLink activeClassName={S.navbaractive} to="/dashboard/news/set-slider">配置头图</NavLink></li>
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
            <Route
              path="/dashboard/news/set-slider"
              render={
                props => (
                  <SetSlider
                    {...props}
                    postHeadline={postHeadline}
                    setStatus={news.sliderSet}
                    sliderShow={news.sliderShow}
                  />)
              }
            />
            <Route path="/dashboard/news/set-list" component={SetList} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default News;
