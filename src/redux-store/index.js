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
  } else if (action.type === 'delete') {
    const updatedList = state.users.filter((user) => {
      return user.id != action.payload.id;
    });
    return { users: [...updatedList] };
  } else if (action.type === 'update') {
    const userIndex = state.users.findIndex((user) => {
      return user.id == action.payload.id;
    });

    const updatedList = [...state.users];
    updatedList[userIndex] = action.payload;

    return { users: [...updatedList] };
  }
  return state;
};
const store = createStore(reducer);

export default store;
