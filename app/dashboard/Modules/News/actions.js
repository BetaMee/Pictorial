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
  return request.get('/apiclient/news/headline')
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

export { PostHeadline, GetHeadline, DeleHeadlineById };
