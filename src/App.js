import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './scss/app.scss';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
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
        </Route>
        <Route path='/form' element={<FormPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/robot' element={<Robot/>} />
        <Route path='/' element={<Home/>} />
      </Routes>  
    </Router>
    
    /*<div>
      <BrowserRouter>
        <Switch>
          <Route path='/robot' element={<Robot/>} />
          <Route path='/' exact element={<Home/>} />
        </Switch>
      </BrowserRouter>
    </div>*/
    
  );
}

export default App;
