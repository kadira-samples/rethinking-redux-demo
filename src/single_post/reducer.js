export default function(state={}, action) {
  if(action.type !== 'SINGLE_POST') {
    return state;
  }

  return action.payload;
}
