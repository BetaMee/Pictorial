import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// 获取action
import { PostHeadline, GetHeadline } from './actions.js';
// 组件
import News from './components/News';

const mapStateToProps = (state, ownProps) => ({
  news: state.news,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  postHeadline: (headline) => {
    dispatch(PostHeadline(headline));
  },
  getHeadline: () => {
    dispatch(GetHeadline());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(News));
