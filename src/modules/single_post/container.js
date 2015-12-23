import { connect } from 'react-redux';
import { loadData } from '../../lib/utils';
import { load } from './actions';

import SinglePost from './component';

const SinglePostWithData = loadData({
  watch: ['params'],
  run: ({load, params}) => load(params.postId)
})(SinglePost);

export default connect(
  ({singlePost}) => ({singlePost}),
  (dispatch) => ({
    load: (...args) => dispatch(load(...args))
  })
)(SinglePostWithData);
