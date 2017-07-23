import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// 子reducer
import NewsReducer from './news/NewsReducer';

export default combineReducers({
  news: NewsReducer,
  routing: routerReducer,
});
