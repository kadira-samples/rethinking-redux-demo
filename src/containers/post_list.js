import { connect } from 'react-redux';
import PostList from '../components/post_list';

export default connect(
  ({postList}) => ({postList}) 
)(PostList);
