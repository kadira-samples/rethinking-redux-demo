import { connect } from 'react-redux';
import React from 'react';
import {go} from '../routes';
import { load } from './actions';

const PostList = ({postList}) => (
  <ul>
    {postList.map(post => (
      <li key={post._id}>
        <a href="#" onClick={go(`/post/${post._id}`)}>{post.title}</a>
      </li>
    ))}
  </ul>
);

class DataComponent extends React.Component {
  componentDidMount() {
    const {load} = this.props;
    load();
  }

  render() {
    const props = this.props;
    return (<PostList {...props} />);
  }
}

export default connect(
  ({postList}) => ({postList}),
  (dispatch) => ({
    load: () => dispatch(load())
  })
)(DataComponent);
