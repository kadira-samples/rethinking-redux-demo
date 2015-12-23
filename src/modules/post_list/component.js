import React from 'react';
import { Link } from 'react-router';

let PostList = ({postList}) => (
  <ul>
    {postList.map(post => (
      <li key={post._id}>
        <Link to={`/post/${post._id}`}>{post.title}</Link>
      </li>
    ))}
  </ul>
);

export default PostList;
