import data from '../../data';

export const LOAD = 'app/single_post/LOAD';

export const load = (postId) => {
  return (dispatch) => {
    const post = data.find(({_id}) => _id === postId);
    dispatch({
      type: LOAD,
      payload: post
    });
  }
};

export default function(state=null, action) {
  if(action.type !== LOAD) {
    return state;
  }

  return action.payload;
}
