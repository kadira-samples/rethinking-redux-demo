import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './modules/app/container';
import PostList from './modules/post_list/container';
import SinglePost from './modules/single_post/container';

export const createRoutes = (history) => {
  return () => (
    <Router history={history}>
      <Route component={App} path="/">
        <IndexRoute component={PostList} />
        <Router path="post/:postId" component={SinglePost} />
      </Route>
    </Router>
  );
}
