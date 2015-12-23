import React from 'react';
import { Link } from 'react-router';
import PostList from '../post_titles/container';
import Comments from '../comments/container';

const PostContent = ({singlePost}) => (
  <div>
    <h3>{singlePost.title}</h3>
    <p>
      {singlePost.content}
    </p>
    <Comments postId={singlePost._id}/>
  </div>
);

class SinglePost extends React.Component {
  componentDidMount() {
    const {load, params} = this.props;
    load(params.postId);
  }

  render() {
    const {singlePost} = this.props;
    return (
      <div>
        <div>
          {singlePost? <PostContent singlePost={singlePost}/> : "Loading..."}
        </div>
        <Link to={'/'}>Back</Link>
        <br />
      </div>
    );
  }
}

export default SinglePost;
