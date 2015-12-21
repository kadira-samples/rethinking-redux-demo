import { connect } from 'react-redux';
import SinglePost from '../components/single_post';

export default connect(
  ({singlePost}) => ({singlePost}) 
)(SinglePost);
