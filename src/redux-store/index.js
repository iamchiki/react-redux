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
  switch (action.type) {
    case 'add':
      return { users: [...state.users, action.payload] };
    case 'delete':
      const newList = state.users.filter((user) => {
        return user.id !== action.payload.id;
      });
      return { users: [...newList] };
    case 'update':
      const userIndex = state.users.findIndex((user) => {
        return user.id === action.payload.id;
      });
      const updatedList = [...state.users];
      updatedList[userIndex] = action.payload;
      return { users: [...updatedList] };
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
