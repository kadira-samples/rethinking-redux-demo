import data from '../../data';

export const load = () => {
  return (dispatch) => {
    dispatch({
      type: 'POST_LIST',
      payload: data
    })
  };
};
