export default function(state=[], action) {
  if(action.type !== 'POST_LIST') {
    return state;
  }

  return action.payload;
};
