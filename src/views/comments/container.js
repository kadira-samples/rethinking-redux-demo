import { connect } from 'react-redux';
import { loadData } from '../../lib/utils';
import { loadComments, clearComments } from '../../ducks/comments';

import Comments from './component';

const CommentsWithData = loadData({
  watch: ['postId'],
  run: ({dispatch, postId}) => {
    dispatch(loadComments(postId));
    return () => clearComments(dispatch);
  }
})(Comments);

export default connect(
  ({comments}) => ({payload: comments.payload, loading: comments.loading}),
  (dispatch) => ({
    load: (postId) => dispatch(loadComments(postId))
  })
)(Comments);
