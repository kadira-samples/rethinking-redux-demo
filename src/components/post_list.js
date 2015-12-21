import React from 'react';
import {go} from '../routes';

const PostList = ({postList}) => (
  <ul>
    {postList.map(post => (
      <li key={post._id}>
        <a href="#" onClick={go(`/post/${post._id}`)}>{post.title}</a>
      </li>
    ))}
  </ul>
);

export default PostList;
