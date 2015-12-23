import React from 'react';
import { Link } from 'react-router';

class Comments extends React.Component {
  componentDidMount() {
    console.log('load....', this.props);
    const {postId, load} = this.props;
    load(postId);
  }

  render() {
    const {loading, payload} = this.props;
    return (
      <div>
        <h5>Comments</h5>
        {loading? "Loading..." : this.renderComments(payload)}
      </div>
    );
  }

  renderComments(comments) {
    return (
      <ul>
        {comments.map(({_id, text}) => (
          <li key={_id}>{text}</li>
        ))}
      </ul>
    );
  }
}

export default Comments;
