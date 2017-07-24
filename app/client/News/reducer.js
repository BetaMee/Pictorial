import {
  REQUEST_NEWS,
  RECEIVE_NEWS,
  ERROR_HANDLE,
} from './actionTypes';

const initialState = {
  data: [],
  message: '',
  success: false,
  isReq: false,
  count: 0,
  index: 0,
};


const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_HANDLE: // 处理错误
      return Object.assign({}, state, {
        message: action.errMsg,
        success: false,
        isReq: false,
      });
    case REQUEST_NEWS: // 请求中
      return Object.assign({}, state, {
        message: '',
        success: false,
        isReq: true,
      });
    case RECEIVE_NEWS: // 获取信息
      return Object.assign({}, state, {
        data: action.data,
        message: '',
        success: true,
        isReq: false,
      });
    default:
      return state;
  }
};

export default NewsReducer;
