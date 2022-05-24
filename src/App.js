import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Users from './pages/Users';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Navigate to='/users'></Navigate>} />
        <Route path='users' element={<Users></Users>}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
