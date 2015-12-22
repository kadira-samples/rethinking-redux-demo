import { combineReducers } from 'redux';

import layout from './modules/layout/reducer';
import singlePost from './modules/single_post/reducer';
import postList from './modules/post_list/reducer';

export default combineReducers({
  layout,
  singlePost,
  postList
});
