import request from 'axios';
import {
  REQUEST_NEWS,
  RECEIVE_NEWS,
  ERROR_HANDLE,
} from './actionTypes';
/**
 * action 辅助函数
 */
const RequestNewsData = () => ({
  type: REQUEST_NEWS,
});

const ReceiveNewsData = news => ({
  type: RECEIVE_NEWS,
  data: news,
});

const ErrorHandle = msg => ({
  type: ERROR_HANDLE,
  errMsg: msg,
});
 /**
  * action 函数
  */
const FetchNewsData = () => (dispatch, getState) => {
  // 先表明正在请求
  dispatch(RequestNewsData());
  return request('/apiclient/getnews')
    .then(res => res.data)
    .then((data) => {
      if (!data.success) {
        dispatch(ErrorHandle(data.message));
      } else {
        dispatch(ReceiveNewsData(data.news));
      }
    })
    .catch((err) => {
      dispatch(ErrorHandle(err.message));
    });
};

export default FetchNewsData;
