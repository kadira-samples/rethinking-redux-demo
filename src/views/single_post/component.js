import React from 'react';
import PostList from '../post_titles/container';
import { Link } from 'react-router';

const PostContent = ({singlePost}) => (
  <div>
    <h3>{singlePost.title}</h3>
    <p>
      {singlePost.content}
    </p>
  </div>
);

let SinglePost = ({singlePost, postId}) => (
  <div>
    <div>
      {singlePost? <PostContent singlePost={singlePost}/> : "Loading..."}
    </div>
    <Link to={'/'}>Back</Link>
    <br />
    <PostList />
  </div>
);

export default SinglePost;
