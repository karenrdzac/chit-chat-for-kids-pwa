import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './scss/app.scss';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Game from './screens/Game';
import Home from './screens/Home';
import Robot from './screens/Robot';
import Dashboard from './screens/Dashboard';
import FormPage from './screens/FormPage';
import Community from './screens/Community';
import MyProgress from './screens/MyProgress';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='dashboard' element={<Dashboard/>}>
          <Route path='community' element={<Community/>}/>
          <Route path='my-progress' element={<MyProgress/>}/>
          <Route path='activities' element={<Game/>}/>
        </Route>
        <Route path='/form' element={<FormPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/robot' element={<Robot/>} />
        <Route path='/' element={<Home/>} />
      </Routes>  
    </Router>
    
  );
}

export default App;
