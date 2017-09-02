import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// 获取action
import FetchNewsData from './actions.js';
// 组件
import News from './components/News';

const mapStateToProps = (state, ownProps) => ({
  // news: state.news,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchNewsData: () => {
    dispatch(FetchNewsData());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(News));
