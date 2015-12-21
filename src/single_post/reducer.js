export default function(state=null, action) {
  if(action.type === 'ROUTE_CHANGE') {
    return null;
  }

  if(action.type !== 'SINGLE_POST') {
    return state;
  }

  return action.payload;
}
