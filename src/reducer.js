import { combineReducers } from 'redux';

import { routeReducer as routing } from 'redux-simple-router';
import singlePost from './modules/single_post/reducer';
import postList from './modules/post_list/reducer';

export default combineReducers({
  singlePost,
  postList,
  routing
});
