export default function dealsReducers(state = {}, action) {
  if (action.error) {
    return state;
  }
  switch (action.type) {
    case 'RECEIVE_DEALS':
      return action.payload;
    default:
      return state;
  }
}
