import { combineReducers } from 'redux';

import { routeReducer as routing } from 'redux-simple-router';
import posts from './ducks/posts';

export default combineReducers({
  routing,
  posts
});
