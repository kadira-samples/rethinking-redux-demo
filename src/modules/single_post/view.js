import React from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../lib/utils';
import { load } from './actions';
import { Link } from 'react-router';

import PostList from '../post_list/view';

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

SinglePost = loadData({
  watch: ['params'],
  run: ({load, params}) => load(params.postId)
})(SinglePost);

export default connect(
  ({singlePost}) => ({singlePost}),
  (dispatch) => ({
    load: (...args) => dispatch(load(...args))
  })
)(SinglePost);
