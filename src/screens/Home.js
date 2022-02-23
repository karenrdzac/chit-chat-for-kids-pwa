import React, { Component } from "react";
import '../scss/app.scss';
import robotHead from '../assets/images/robot-head.png';

class Home extends Component {
  render() {
    return (
      <div className='ChitChat ChitChat-home'>
				<h1>Chit Chat</h1>
				<p>Say hello to your personalized virtual therapy</p>
				<button className='buttons-menu ChitChat-white-button'>Log In</button>
				<button className='buttons-menu ChitChat-transparent-button'>Sign Up</button>
      </div>		
    );
  }
}

export default Home;