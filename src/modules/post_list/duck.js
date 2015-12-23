import data from '../../data';

export const LOAD = 'app/post_list/LOAD';

export const load = () => {
  return (dispatch) => {
    dispatch({
      type: LOAD,
      payload: data
    })
  };
};

export default function(state=[], action) {
  if(action.type !== LOAD) {
    return state;
  }

  return action.payload;
};
