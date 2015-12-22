import React from 'react';
import { connect } from 'react-redux';

import PostList from '../post_list/view';
import SinglePost from '../single_post/view';

const Layout = ({children}) => (
  <div>
    <header>
      <h1>My Blog</h1>
    </header>
    <hr />
    <div>
      {children}
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

export default Layout;
