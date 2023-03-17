import './App.css';
import React from 'react';
import Login from './containers/Login';
import Register from './containers/Register'
import { Route, Routes } from 'react-router-dom'
import ChangePassword from './containers/ChangePassword';

const App = () => {
  
  
  return (
    
    <>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/changePassword' element={<ChangePassword />}></Route>
      </Routes>
    </>
  );
}
export default App;

