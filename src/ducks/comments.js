export const LOADING = 'app/comments/LOADING';
export const LOAD = 'app/comments/LOAD';
export const CLEAR = 'app/comments/CLEAR';

export const loadComments = (postId) => {
  return (dispatch) => {
    setTimeout(() => {
      const payload = [
        {_id: `${Math.random()}`, text: `Post ${postId} is awesome`},
        {_id: `${Math.random()}`, text: `I like this post: ${postId}`}
      ];
      dispatch({
        type: LOAD,
        payload,
        postId
      });
    }, 400);
  };
};

export const clearComments = (dispatch) => {
  dispatch({type: CLEAR});
};

const defaultState = {
  postId: null,
  payload: [],
  loading: true
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case CLEAR:
      return defaultState;
    case LOAD:
      const {postId, payload} = action;
      return {
        payload,
        postId,
        loading: false
      };
    default:
      return state;
  }
};