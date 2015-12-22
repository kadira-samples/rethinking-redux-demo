import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../lib/router';
import { loadData } from '../../lib/utils';
import { load } from './actions';

import PostList from '../post_list/view';

const PostContent = ({singlePost}) => (
  <div>
    <h3>{singlePost.title}</h3>
    <p>
      {singlePost.content}
    </p>
    <a href='/'>Back</a>
  </div>
);

let SinglePost = ({singlePost, postId}) => (
  <div>
    {singlePost? <PostContent singlePost={singlePost}/> : "Loading..."}
    <br />
    <PostList />
  </div>
);

SinglePost = loadData({
  watch: ['postId'],
  run: ({load, postId}) => load(postId)
})(SinglePost);

export default connect(
  ({singlePost}) => ({singlePost}),
  (dispatch) => ({
    load: (...args) => dispatch(load(...args))
  })
)(SinglePost);
