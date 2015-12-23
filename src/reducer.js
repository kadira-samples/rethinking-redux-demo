import { combineReducers } from 'redux';

import { routeReducer as routing } from 'redux-simple-router';
import singlePost from './modules/single_post/duck';
import postList from './modules/post_list/duck';

export default combineReducers({
  singlePost,
  postList,
  routing
});
