import { connect } from 'react-redux';
import React from 'react';
import { loadData } from '../../lib/utils';
import { load } from './actions';
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

PostList = loadData({
  run: ({load}) => load()
})(PostList)

export default connect(
  ({postList}) => ({postList}),
  (dispatch) => ({
    load: () => dispatch(load())
  })
)(PostList);
