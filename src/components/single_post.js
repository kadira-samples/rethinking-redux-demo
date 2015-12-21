import React from 'react';
import {go} from '../routes';

const SinglePost = ({post}) => (
  <div>
    <h3>This is a single post</h3>
    <a href="#" onClick={go('/')}>Back</a>
  </div>
);

export default SinglePost;
