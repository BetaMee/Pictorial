import request from 'axios';

import {
  REQUEST_DELE_HEADLINE,
  RECEIVE_DELE_HEADLINE,
  ERROR_DELE_HEADLINE,

  REQUEST_GET_HEADLINE,
  RECEIVE_GET_HEADLINE,
  ERROR_GET_HEADLINE,

  REQUEST_HEADLINE,
  RECEIVE_HEADLINE,
  ERROR_HEADLINE,

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

// GET 接口，获取头条的数据
const RequestGetHeadline = () => ({
  type: REQUEST_GET_HEADLINE,
});

const ReceiveGetHeadLine = headline => ({
  type: RECEIVE_GET_HEADLINE,
  data: headline,
});

const ErrorGetHeadline = msg => ({
  type: ERROR_GET_HEADLINE,
  msg,
});

const GetHeadline = () => (dispatch, getState) => {
  dispatch(RequestGetHeadline());
  return request.get('/apiclient/news/getheadlines')
    .then(res => res.data)
    .then((data) => {
      if (!data.success) {
        dispatch(ErrorGetHeadline(data.message));
      } else {
        dispatch(ReceiveGetHeadLine(data.data));
      }
    })
    .catch((err) => {
      dispatch(ErrorGetHeadline(err.message));
    });
};

// POST接口，增加headline
const RequestPostHeadline = () => ({
  type: REQUEST_HEADLINE,
});

const ReceiveHeadLine = headline => ({
  type: RECEIVE_HEADLINE,
  data: headline,
});


const ErrorHeadlineHandle = msg => ({
  type: ERROR_HEADLINE,
  msg,
});


const PostHeadline = headline => (dispatch, getState) => {
  // 先请求
  dispatch(RequestPostHeadline());
  return request.post('/apimanage/news/addheadline', headline)
    .then(res => res.data)
    .then((data) => {
      if (!data.success) {
        dispatch(ErrorHeadlineHandle(data.message));
      } else {
        dispatch(ReceiveHeadLine(data.data));
      }
    })
    .catch((err) => {
      dispatch(ErrorHeadlineHandle(err.message));
    });
};


// DELETE 接口， 删除头条中的一项
const RequestDeleHeadlineById = () => ({
  type: REQUEST_DELE_HEADLINE,
});

const ReceiveDeleHeadLine = headline => ({
  type: RECEIVE_DELE_HEADLINE,
  data: headline,
});

const ErrorDeleHeadline = msg => ({
  type: ERROR_DELE_HEADLINE,
  msg,
});

const DeleHeadlineById = objectId => (dispatch, getState) => {
  dispatch(RequestDeleHeadlineById());
  return request.post('/apimanage/news/deleheadline', objectId)
    .then(res => res.data)
    .then((data) => {
      if (!data.success) {
        dispatch(ErrorDeleHeadline(data.message));
      } else {
        dispatch(ReceiveDeleHeadLine(data.data));
      }
    })
    .catch((err) => {
      dispatch(ErrorDeleHeadline(err.message));
    });
};

// POST 添加新闻列表
const RequestPostNews = () => ({
  type: REQUEST_POST_NEWSLIST,
});

const ReceivePostNews = newsLits => ({
  type: RECEIVE_POST_NEWSLIST,
  data: newsLits,
});

const ErrorPostNews = msg => ({
  type: ERROR_POST_NEWSLIST,
  msg,
});

const PostNewsLists = newsList => (dispatch, getState) => {
  dispatch(RequestPostNews());
  return request.post('/apimanage/news/addnews', newsList)
    .then(res => res.data)
    .then((data) => {
      if (!data.success) {
        dispatch(ErrorPostNews(data.message));
      } else {
        dispatch(ReceivePostNews(data.data));
      }
    })
    .catch((err) => {
      dispatch(ErrorPostNews(err.message));
    });
};

// GET 新闻列表
const RequestGetNews = () => ({
  type: REQUEST_GET_NEWSLIST,
});

const ReceiveGetNews = newsLits => ({
  type: RECEIVE_GET_NEWSLIST,
  data: newsLits,
});

const ErrorGetNews = msg => ({
  type: ERROR_GET_NEWSLIST,
  msg,
});

const GetNewsLists = () => (dispatch, getState) => {
  dispatch(RequestGetNews());
  return request.get('/apiclient/news/getnews')
    .then(res => res.data)
    .then((data) => {
      if (!data.success) {
        dispatch(ErrorGetNews(data.message));
      } else {
        dispatch(ReceiveGetNews(data.data));
      }
    })
    .catch((err) => {
      dispatch(ErrorGetNews(err.message));
    });
};


// DELETE 删除新闻中的一条
const RequestDeleNews = () => ({
  type: REQUEST_DELE_NEWSLIST,
});

const ReceiveDeleNews = newsLits => ({
  type: RECEIVE_DELE_NEWSLIST,
  data: newsLits,
});

const ErrorDeleNews = msg => ({
  type: ERROR_DELE_NEWSLIST,
  msg,
});

const DeleNewsListsById = objectId => (dispatch, getState) => {
  dispatch(RequestDeleNews());
  return request.post('/apimanage/news/delenews', objectId)
    .then(res => res.data)
    .then((data) => {
      if (!data.success) {
        dispatch(ErrorDeleNews(data.message));
      } else {
        dispatch(ReceiveDeleNews(data.data));
      }
    })
    .catch((err) => {
      dispatch(ErrorDeleNews(err.message));
    });
};

export {
  PostHeadline,
  GetHeadline,
  DeleHeadlineById,
  PostNewsLists,
  GetNewsLists,
  DeleNewsListsById,
};

