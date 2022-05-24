import { createStore } from 'redux';

const initialState = {
  users: [{ name: 'chiki' }],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'add') {
    return { users: [...state.users, action.payload] };
  }
  return state;
};
const store = createStore(reducer);

export default store;
