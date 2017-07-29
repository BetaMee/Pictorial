import request from 'axios';
import {
  REQUEST_FUNS,
  RECEIVE_FUNS,
  ERROR_FUNS,
} from './actionTypes';

/**
 * action 辅助函数
 */
const RequestFunsData = () => ({
  type: REQUEST_FUNS,
});

const ReceiveFunsData = funs => ({
  type: RECEIVE_FUNS,
  data: funs,
});

const ErrorHandle = msg => ({
  type: ERROR_FUNS,
  errMsg: msg,
});
 /**
  * action 函数
  */
const FetchFunsData = () => (dispatch, getState) => {
  // 先表明正在请求
  dispatch(RequestFunsData());
  return request('/apiclient/getfuns')
    .then(res => res.data)
    .then((data) => {
      if (!data.success) {
        dispatch(ErrorHandle(data.message));
      } else {
        dispatch(ReceiveFunsData(data.funs));
      }
    })
    .catch((err) => {
      dispatch(ErrorHandle(err.message));
    });
};

export default FetchFunsData;
