import { pushPath } from 'redux-simple-router';

import data from '../data';

export const LOAD_TITLES = 'app/posts/LOAD_TITLES';
export const LOAD_SINGLE = 'app/posts/LOAD_SINGLE';
export const ADDING_POST = 'app/posts/ADDING_POST';
export const POST_ADDED = 'app/posts/POST_ADDED';

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
    dispatch({type: LOAD_SINGLE, payload: null});
    const post = data.find(p => p._id === postId);
    setTimeout(() => {
      dispatch({type: LOAD_SINGLE, payload: post});
    }, 300);
  };
};

export const addPost = (postInfo) => {
  return (dispatch) => {
    dispatch({type: ADDING_POST, payload: postInfo});
    setTimeout(() => {
      const id = `${Math.random()}`
      data.push({
        _id: `aa${id}`,
        title: `Some title: ${id}`,
        content: `Some content: ${id}`
      });
      dispatch({type: POST_ADDED, payload: postInfo});
      dispatch(pushPath('/'));
    }, 300);
  }
};

const defaultState = {
  postTitles: [],
  currentPost: {},
  currentlyAddingPost: null
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
        currentPost: action.payload
      };
    case ADDING_POST:
      return {
        ...state,
        currentlyAddingPost: action.payload
      };
    case POST_ADDED:
      return {
        ...state,
        currentlyAddingPost: null
      }
    default:
      return state;
  }
};
