import React from 'react';
import { connect } from 'react-redux';
import {go} from '../routes';
import { load } from './actions';

import PostList from '../post_list/view';

const PostContent = ({singlePost}) => (
  <div>
    <h3>{singlePost.title}</h3>
    <p>
      {singlePost.content}
    </p>
    <a href="#" onClick={go('/')}>Back</a>
  </div>
);

const SinglePost = ({singlePost, postId}) => (
  <div>
    {singlePost? <PostContent singlePost={singlePost}/> : "Loading..."}
    <br />
    <PostList />
  </div>
);

class DataComponent extends React.Component {
  runLoad(props) {
    const {postId, load} = props;
    if(this.postId !== postId) {
      this.postId = postId;
      setTimeout(() => {
        load(postId);
      })
    }
  }

  componentWillMount() {
    this.runLoad(this.props);
  }

  componentWillReceiveProps(props) {
    this.runLoad(props);
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
