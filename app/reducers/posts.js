import initialState from 'emberuxstagram/data/posts';

function posts (state = initialState, action) {
  switch (action.type) {
  case 'INCREMENT_LIKES':
    const i = action.index;
    return [
      ...state.slice(0,i), // before the one we are updating
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i + 1), // after the one we are updating
    ]
    return state;
  default:
    return state;
  }
}

export default posts;
