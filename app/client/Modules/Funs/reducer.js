import {
  REQUEST_FUNS,
  RECEIVE_FUNS,
  ERROR_FUNS,
} from './actionTypes';

const initialState = {
  data: [],
  message: '',
  success: false,
  isReq: false,
  count: 0,
  index: 0,
};


const FunsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_FUNS: // 处理错误
      return Object.assign({}, state, {
        message: action.errMsg,
        success: false,
        isReq: false,
      });
    case REQUEST_FUNS: // 请求中
      return Object.assign({}, state, {
        message: '',
        success: false,
        isReq: true,
      });
    case RECEIVE_FUNS: // 获取信息
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

export default FunsReducer;
