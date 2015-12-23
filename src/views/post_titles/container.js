import { connect } from 'react-redux';
import { loadData } from '../../lib/utils';
import { loadTitles } from '../../ducks/posts';
import PostList from './component';

const PostListWithData = loadData({
  run: ({dispatch}) => dispatch(loadTitles())
})(PostList)

export default connect(
  ({posts}) => ({postTitles: posts.postTitles}),
)(PostListWithData);
