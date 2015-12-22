import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../lib/router';

import PostList from '../post_list/view';
import SinglePost from '../single_post/view';

const Layout = ({layout}) => (
  <div>
    <header>
      <h1 onClick={register('/')}>My Blog</h1>
    </header>
    <hr />
    <div>
      {layout.content === "singlePost"? <SinglePost postId={layout.postId}/> : null}
      {layout.content === "postList"? <PostList /> : null}
    </div>
    <hr />
    <footer>
      <p>
        <small>
          Thank you for reading my blog.
        </small>
      </p>
    </footer>
  </div>
);

export default connect(
  ({layout}) => ({layout})
)(Layout);
