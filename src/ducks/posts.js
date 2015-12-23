import data from '../data';

export const LOAD_TITLES = 'app/posts/LOAD_TITLES';
export const LOAD_SINGLE = 'app/posts/LOAD_SINGLE';

export const loadTitles = () => {
  return (dispatch) => {
    dispatch({
      type: LOAD_TITLES,
      payload: data
    });
  };
};

export const loadSingle = (postId) => {
  return (dispatch) => {
    const post = data.find(p => p._id === postId);
    dispatch({
      type: LOAD_SINGLE,
      payload: post,
      postId: postId
    });
  };
}

const defaultState = {
  postTitles: [],
  currentPost: {},
  currentPostId: null
};

export default function(state=defaultState, action) {
  switch (action.type) {
    case LOAD_TITLES:
      return {
        ...state,
        postTitles: action.payload || []
      };
    case LOAD_SINGLE:
      return {
        ...state,
        currentPost: action.payload,
        currentPostId: action.postId
      };
    default:
      return state;
  }
};
