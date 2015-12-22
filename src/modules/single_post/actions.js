import data from '../../data';

export const load = (postId) => {
  return (dispatch) => {
    const post = data.find(({_id}) => _id === postId);
    dispatch({
      type: 'SINGLE_POST',
      payload: post
    });
  }
};
