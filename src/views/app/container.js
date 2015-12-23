import React from 'react';
import { Link } from 'react-router';

const Layout = ({children}) => (
  <div>
    <header>
      <h1>My Blog</h1>
      <Link to='/'>Home</Link> |
      <Link to='/newpost'> New Post</Link> 
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
