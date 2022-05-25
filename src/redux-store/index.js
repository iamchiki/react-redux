import { createStore } from 'redux';

const initialState = {
  users: [
    {
      id: '1',
      name: 'chiki',
      email: 'chiki@gmail.com',
      contact: '1234567890',
      place: 'Delhi',
    },
    {
      id: '2',
      name: 'akshay',
      email: 'akshay@gmail.com',
      contact: '1234567890',
      place: 'Mumbai',
    },
  ],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'add') {
    return { users: [...state.users, action.payload] };
  }
  return state;
};
const store = createStore(reducer);

export default store;
