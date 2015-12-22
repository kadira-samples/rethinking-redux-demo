const defaultState = {content: 'postList'};
export default function(state = defaultState, action) {
  if(action.type !== 'ROUTE_CHANGE') {
    return state;
  }

  const newState = Object.assign({}, state);
  switch(action.name) {
    case 'singlePost':
      newState.content = action.name;
      newState.postId = action.params.postId;
      break;
    default:
      newState.content = action.name;
  }
  
  return newState;
};
