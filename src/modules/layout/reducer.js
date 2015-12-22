const defaultState = {content: 'postList'};
export default function(state = defaultState, action) {
  if(action.type !== 'ROUTE_CHANGE') {
    return state;
  }

  const newState = Object.assign({}, state);
  newState.content = action.name;
  if(action.name === 'singlePost') {
    newState.postId = action.params.postId;
  }
  
  return newState;
};
