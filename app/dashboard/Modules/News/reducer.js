import {
  REQUEST_GET_HEADLINE,
  RECEIVE_GET_HEADLINE,
  ERROR_GET_HEADLINE,

  REQUEST_HEADLINE,
  RECEIVE_HEADLINE,
  ERROR_HEADLINE,
} from './actionTypes';

const initialState = {
  sliderSet: {
    data: null,
    message: '',
    success: false,
    isRequesting: false,
  },
  sliderShow: {
    data: [],
    message: '',
    success: false,
    isRequesting: false,
  },
  listSet: {
    data: null,
    message: '',
    success: false,
    isRequesting: false,
  },
};


const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_HEADLINE: // 处理错误
      return Object.assign({}, state, {
        sliderSet: Object.assign({}, state.sliderSet, {
          message: action.msg,
          success: false,
          isRequesting: false,
        }),
      });
    case REQUEST_HEADLINE: // 请求headline中
      return Object.assign({}, state, {
        sliderSet: Object.assign({}, state.sliderSet, {
          isRequesting: true,
        }),
      });
    case RECEIVE_HEADLINE: // 获取headline信息
      return Object.assign({}, state, {
        sliderSet: Object.assign({}, state.sliderSet, {
          data: Object.assign({}, action.data),
          message: '发送headline成功',
          success: true,
          isRequesting: false,
        }),
      });
      // GET 接口
    case ERROR_GET_HEADLINE:
      return Object.assign({}, state, {
        sliderShow: Object.assign({}, state.sliderShow, {
          message: action.msg,
          success: false,
          isRequesting: false,
        }),
      });
    case REQUEST_GET_HEADLINE:
      return Object.assign({}, state, {
        sliderShow: Object.assign({}, state.sliderShow, {
          isRequesting: true,
        }),
      });
    case RECEIVE_GET_HEADLINE:
      return Object.assign({}, state, {
        sliderShow: Object.assign({}, state.sliderShow, {
          data: action.data,
          message: '获取headline成功',
          success: true,
          isRequesting: false,
        }),
      });
    default:
      return state;
  }
};

export default NewsReducer;
