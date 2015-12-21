import React from 'react';
import {go} from '../routes';

const Layout = ({content}) => (
  <div>
    <header>
      <h1 onClick={go('/')}>My Blog</h1>
    </header>
    <hr />
    <div>
      {content()}
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
