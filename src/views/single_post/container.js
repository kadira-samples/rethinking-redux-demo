import { connect } from 'react-redux';
import { loadData } from '../../lib/utils';
import { loadSingle } from '../../ducks/posts';

import SinglePost from './component';

const SinglePostWithData = loadData({
  watch: ['params'],
  run: ({dispatch, params}) => dispatch(loadSingle(params.postId))
})(SinglePost);

export default connect(
  ({posts}) => ({singlePost: posts.currentPost}),
  (dispatch) => ({
    load: (postId) => dispatch(loadSingle(postId))
  })
)(SinglePost);
