const defaultState = {
  layout: {
    content: 'postList'
  },
  postList: [
    {_id: 'one', title: 'Redux is Awesome'},
    {_id: 'two', title: 'GraphQL is Superb'},
  ]
};

export default function(state=defaultState, action) {
  if(action.type !== 'ROUTE_CHANGE') {
    return state;
  }

  const newState = JSON.parse(JSON.stringify(state));
  newState.layout.content = action.name;

  return newState;
}
