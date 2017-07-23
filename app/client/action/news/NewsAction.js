import request from 'axios';

/**
 * action 类型
 */
export const REQUEST_NEWS = 'REQUEST_NEWS';
export const RECEIVE_NEWS = 'RECEIVE_NEWS';
export const ERROR_HANDLE = 'ERROR_HANDLE';

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
export const FetchNewsData = () => (dispatch, getState) => {
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
