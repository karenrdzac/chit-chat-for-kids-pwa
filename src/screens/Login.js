import React, { Component } from "react";
import '../scss/app.scss';
import logo from '../assets/images/logo-home.svg';
import arrowLeft from '../assets/images/arrow-left.png';
import { Link } from "react-router-dom";

class Login extends Component {
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
			<div className='ChitChat body'>
				<button className='back-btn'>
					<img src={arrowLeft}></img>
					<Link to='/'>Back</Link>
				</button>
				<div className='ChitChat-login'>
					<img src={logo} className ='logo-img'></img>
					<p>Let’s create your account!</p>
					<form className='form' name='signUpForm'>
						<input type='text' className='ChitChat-input-log-in' name='user' placeholder='User Name' onChange={this.handleNameChange} minLength='2'></input>
						<input className='ChitChat-input-log-in' name='password' type='password' placeholder='Password' onChange={this.handlePasswordChange} minLength='3'></input>
						<button disabled={!this.state.name || !this.state.password} className='buttons-menu ChitChat-white-button white-btn'><Link to='/dashboard/activities'>Continue</Link></button>
					</form>
				</div>	
			</div>   		
    );
  }
}

export default Login;