import { connect } from 'react-redux';
import { addPost } from '../../ducks/posts';
import NewPost from './component';

export default connect(
  ({posts}) => ({postAdding: Boolean(posts.currentlyAddingPost)}),
  (dispatch) => ({
    addPost: (info) => dispatch(addPost(info))
  })
)(NewPost);
