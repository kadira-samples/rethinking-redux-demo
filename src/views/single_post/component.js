import React from 'react';
import PostList from '../post_titles/container';
import { Link } from 'react-router';

const PostContent = ({singlePost}) => (
  <div>
    <h3>{singlePost.title}</h3>
    <p>
      {singlePost.content}
    </p>
    <Link to='/'>Back</Link>
  </div>
);

let SinglePost = ({singlePost, postId}) => (
  <div>
    {singlePost? <PostContent singlePost={singlePost}/> : "Loading..."}
    <br />
    <PostList />
  </div>
);

export default SinglePost;
