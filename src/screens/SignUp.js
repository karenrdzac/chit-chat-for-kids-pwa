import React, { Component } from "react";
import '../scss/app.scss';
import arrowLeft from '../assets/images/arrow-left.png'
import logo from '../assets/images/logo-home.svg';
import { Link } from "react-router-dom";

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
					<Link to='/'>Back</Link>
				</button>
				<div className='ChitChat-sign-up'>
					<img src={logo} className ='logo-img'></img>
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