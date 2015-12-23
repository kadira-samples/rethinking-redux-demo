import React from 'react';
import { Link } from 'react-router';

class NewPost extends React.Component {
  render() {
    const {postAdding} = this.props;
    return (
      <div>
        <h3>Add a New Post</h3>
        {postAdding? "Adding..." : this.renderButton() }
      </div>
    );
  }

  renderButton() {
    const {addPost} = this.props;
    return (
      <button onClick={addPost}>AddNow</button>
    );
  }
}

export default NewPost;
