import { combineReducers } from 'redux';

import layout from './layout/reducer';
import singlePost from './single_post/reducer';
import postList from './post_list/reducer';

export default combineReducers({
  layout,
  singlePost,
  postList
});
