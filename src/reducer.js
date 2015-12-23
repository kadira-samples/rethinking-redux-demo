import { combineReducers } from 'redux';

import { routeReducer as routing } from 'redux-simple-router';
import posts from './ducks/posts';
import comments from './ducks/comments';

export default combineReducers({
  routing,
  posts,
  comments
});
