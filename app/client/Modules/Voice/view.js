import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// 获取action
// import FetchFunsData from './actions.js';
// 组件
import Voice from './components/Voice';

const mapStateToProps = (state, ownProps) => ({
  // funs: state.funs,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  // fetchFunsData: () => {
  //   dispatch(FetchFunsData());
  // },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Voice));
