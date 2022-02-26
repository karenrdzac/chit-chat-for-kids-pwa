import React, { Component } from "react";
import '../scss/app.scss';
import arrowLeft from '../assets/images/arrow-left.png';
import { Link } from "react-router-dom";

import Form from '../components/Form/Form';

class FormPage extends Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
			<div className='ChitChat body ChitChat-form'>
                <button className='back-btn'>
					<img src={arrowLeft}></img>
					<Link to='/signup'>Back</Link>
				</button>
                <div className='ChitChat-form-head'>
                    <h2 className='ChitChat-form-head-title'>Let's get to know your child</h2>
                    <p className='ChitChat-form-head-text'>Please help us evaluate your child to give you our best recommendations.</p>	
                </div>
                <div>
                    <Form></Form>
                </div>
			</div>   		
    );
  }
}

export default FormPage;