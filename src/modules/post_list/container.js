import { connect } from 'react-redux';
import { loadData } from '../../lib/utils';
import { load } from './duck';
import PostList from './component';

const PostListWithData = loadData({
  run: ({load}) => load()
})(PostList)

export default connect(
  ({postList}) => ({postList}),
  (dispatch) => ({
    load: () => dispatch(load())
  })
)(PostListWithData);
