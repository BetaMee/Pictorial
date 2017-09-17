import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// 获取action
import {
  PostHeadline,
  GetHeadline,
  DeleHeadlineById,
  PostNewsLists,
  GetNewsLists,
  DeleNewsListsById,
} from './actions.js';
// 组件
import News from './components/News';

const mapStateToProps = (state, ownProps) => ({
  news: state.news,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // 添加headline信息
  postHeadline: (headline) => {
    dispatch(PostHeadline(headline));
  },
  // 获取headline信息
  getHeadline: () => {
    dispatch(GetHeadline());
  },
  // 删除headline信息
  deleHeadlineById: (objectId) => {
    dispatch(DeleHeadlineById({ objectId }));
  },
  // 添加newslist信息
  postNewsLists: (newsList) => {
    dispatch(PostNewsLists(newsList));
  },
  // 获取newslist信息
  getNewsLists: () => {
    dispatch(GetNewsLists());
  },
  deleNewsListsById: (objectId) => {
    dispatch(DeleNewsListsById({ objectId }));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(News));
