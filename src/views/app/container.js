import React from 'react';

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
