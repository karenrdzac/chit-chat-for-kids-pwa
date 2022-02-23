import React, { Component } from "react";
import '../scss/app.scss';
import logo from '../assets/images/logo-home.svg';
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className='ChitChat ChitChat-home'>
				<img src={logo} className ='logo-img'></img>
        <p>Say hello to your personalized virtual therapy</p>
				<button className='buttons-menu ChitChat-white-button'><Link to='/login'>Log In</Link></button>
        <button className='buttons-menu ChitChat-transparent-button'><Link to='/signup'>Sign Up</Link></button>
      </div>		
    );
  }
}

export default Home;