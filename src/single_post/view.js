import React from 'react';
import { connect } from 'react-redux';
import {go} from '../routes';
import { load } from './actions';

const SinglePost = ({singlePost, postId}) => (
  <div>
    <h3>{singlePost.title}</h3>
    <p>
      {singlePost.content}
    </p>
    <a href="#" onClick={go('/')}>Back</a>
  </div>
);

class DataComponent extends React.Component {
  componentDidMount() {
    const {postId, load} = this.props;
    load(postId);
  }

  render() {
    const props = this.props;
    return (<SinglePost {...props} />)
  }
}

export default connect(
  ({singlePost}) => ({singlePost}),
  (dispatch) => ({
    load: (...args) => dispatch(load(...args))
  })
)(DataComponent);
