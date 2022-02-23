import React, { Component } from "react";
import '../scss/app.scss';
import robotHead from '../assets/images/robot-head.png';
import arrowLeft from '../assets/images/arrow-left.png'

class SignUp extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			user: '',
			password: ''
		}
	}

	handleNameChange = event => {
    this.setState({ name: event.target.value });
	};

	handlePasswordChange = event => {
    this.setState({ password: event.target.value });
	};

  render() {
    return (
      <div className='ChitChat'>
				<button className='back-btn'>
					<img src={arrowLeft}></img>
					Back
				</button>
				<div className='ChitChat-sign-up'>
					<h1>Chit Chat</h1>
          <p className='ChitChat-sign-up-text'>Sign up</p>
					<form className='form' name='signUpForm'>
            <input className='ChitChat-input-log-in' name='user' placeholder='User Name' onChange={this.handleNameChange}></input>
            <input className='ChitChat-input-log-in' name='password' type='password' placeholder='Password' onChange={this.handlePasswordChange}></input>
            <button disabled={!this.state.name || !this.state.password} className='buttons-menu ChitChat-white-button sign-up-btn'>Continue</button>
          </form>
        </div>  
      </div>		
    );
  }
}

export default SignUp;