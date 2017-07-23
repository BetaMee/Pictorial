import {
  REQUEST_NEWS,
  RECEIVE_NEWS,
  ERROR_HANDLE,
} from '../../action/news/NewsAction';

const initialState = {
  data: [],
  message: '',
  success: false,
  isReq: false,
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
}

export default NewsReducer;
