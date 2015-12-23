import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './views/app/container';
import PostTitles from './views/post_titles/container';
import SinglePost from './views/single_post/container';

export const createRoutes = (history) => {
  return () => (
    <Router history={history}>
      <Route component={App} path="/">
        <IndexRoute component={PostTitles} />
        <Router path="post/:postId" component={SinglePost} />
      </Route>
    </Router>
  );
}
