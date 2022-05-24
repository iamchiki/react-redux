import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    return state.users;
  });

  const addUser = () => {
    dispatch({ type: 'add', payload: { name: 'akshay' } });
  };
  return (
    <div>
      <h1>hello </h1>
      {users.map((user) => {
        return <p>{user.name}</p>;
      })}
      <button onClick={addUser}>add user</button>
    </div>
  );
};

export default Users;
