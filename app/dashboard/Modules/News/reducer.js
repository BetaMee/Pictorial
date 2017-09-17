import {
  REQUEST_GET_HEADLINE,
  RECEIVE_GET_HEADLINE,
  ERROR_GET_HEADLINE,

  REQUEST_HEADLINE,
  RECEIVE_HEADLINE,
  ERROR_HEADLINE,

  REQUEST_DELE_HEADLINE,
  RECEIVE_DELE_HEADLINE,
  ERROR_DELE_HEADLINE,

  REQUEST_POST_NEWSLIST,
  RECEIVE_POST_NEWSLIST,
  ERROR_POST_NEWSLIST,

  REQUEST_GET_NEWSLIST,
  RECEIVE_GET_NEWSLIST,
  ERROR_GET_NEWSLIST,

  REQUEST_DELE_NEWSLIST,
  RECEIVE_DELE_NEWSLIST,
  ERROR_DELE_NEWSLIST,
} from './actionTypes';

const initialState = {
  sliderSet: {
    data: null,
    message: '',
    success: false,
    isRequesting: false,
  },
  sliderShow: {
    data: null,
    message: '',
    success: false,
    isRequesting: false,
  },
  listShow: {
    data: null,
    message: '',
    success: false,
    isRequesting: false,
  },
};


const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    // POST 接口处理，增加headline
    case ERROR_HEADLINE: // 处理错误
      return Object.assign({}, state, {
        sliderSet: Object.assign({}, state.sliderSet, {
          data: null,
          message: action.msg,
          success: false,
          isRequesting: false,
        }),
      });
    case REQUEST_HEADLINE: // 请求headline中
      return Object.assign({}, state, {
        sliderSet: Object.assign({}, state.sliderSet, {
          data: null,
          message: '',
          success: false,
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
      // GET 接口，获取所有headline
    case ERROR_GET_HEADLINE:
      return Object.assign({}, state, {
        sliderShow: Object.assign({}, state.sliderShow, {
          data: null,
          message: action.msg,
          success: false,
          isRequesting: false,
        }),
      });
    case REQUEST_GET_HEADLINE:
      return Object.assign({}, state, {
        sliderShow: Object.assign({}, state.sliderShow, {
          success: false,
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
      // DELETE接口，删除某一项
    case ERROR_DELE_HEADLINE:
      return Object.assign({}, state, {
        sliderShow: Object.assign({}, state.sliderShow, {
          data: null,
          message: action.msg,
          success: false,
          isRequesting: false,
        }),
      });
    case REQUEST_DELE_HEADLINE:
      return Object.assign({}, state, {
        sliderShow: Object.assign({}, state.sliderShow, {
          success: false,
          isRequesting: true,
        }),
      });
    case RECEIVE_DELE_HEADLINE:
      return Object.assign({}, state, {
        sliderShow: Object.assign({}, state.sliderShow, {
          data: action.data,
          message: '删除headline成功',
          success: true,
          isRequesting: false,
        }),
      });
      // POST 添加新闻
      // GET 获取新闻
      // DELE 删除新闻
    case ERROR_GET_NEWSLIST:
    case ERROR_POST_NEWSLIST:
    case ERROR_DELE_NEWSLIST:
      return {
        ...state,
        listShow: {
          ...state.listShow,
          data: null,
          message: action.msg,
          success: false,
          isRequesting: false,
        },
      };
    case REQUEST_GET_NEWSLIST:
    case REQUEST_POST_NEWSLIST:
    case REQUEST_DELE_NEWSLIST:
      return {
        ...state,
        listShow: {
          ...state.listShow,
          message: '请求中...',
          success: false,
          isRequesting: true,
        },
      };
    case RECEIVE_GET_NEWSLIST:
    case RECEIVE_POST_NEWSLIST:
    case RECEIVE_DELE_NEWSLIST:
      return {
        ...state,
        listShow: {
          ...state.listShow,
          data: action.data,
          message: '更新新闻成功',
          success: true,
          isRequesting: false,
        },
      };
    default:
      return state;
  }
};

export default NewsReducer;
