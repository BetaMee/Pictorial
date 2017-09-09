import request from 'axios';

import {
  REQUEST_GET_HEADLINE,
  RECEIVE_GET_HEADLINE,
  ERROR_GET_HEADLINE,

  REQUEST_HEADLINE,
  RECEIVE_HEADLINE,
  ERROR_HEADLINE,
} from './actionTypes';


// POST接口
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
  return request.post('/apimanage/postnews/headline', headline)
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

// GET 接口
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
  return request.get('/apiclient/getnews/headline')
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

export { PostHeadline, GetHeadline };
