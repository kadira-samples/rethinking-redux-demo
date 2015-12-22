import { connect } from 'react-redux';
import React from 'react';
import { register } from '../../lib/router';
import { loadData } from '../../lib/utils';
import { load } from './actions';

let PostList = ({postList}) => (
  <ul>
    {postList.map(post => (
      <li key={post._id}>
        <a href="#" onClick={register(`/post/${post._id}`)}>{post.title}</a>
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
