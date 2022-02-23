import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './scss/app.scss';
import FormComponent from './components/Form';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Home from './screens/Home';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/' element={<Home/>} />
    </Routes>
  );
}

export default App;
