import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../scss/app.scss';

class FormComponent extends Component {
	constructor(props) {
			super(props);
			
			this.state = {
				name: ''
			}
	}
	
	handleNameChange = event => {
    this.setState({ name: event.target.value });
	};

	render() {
		return (
		<div className = 'ChitChat'>
					<section className='ChitChat-formulary '>
						<form name='evaluationForm'>
							<div className='ChitChat-formulary-inp-container'>
								<label className='ChitChat-formulary-inp-container-label' for='childName'>What’s your child name?</label>
								<input className='ChitChat-formulary-inp-container-input' placeholder='Type your answer' id='childName' onChange={this.handleNameChange}></input>
							</div>
							<div className='ChitChat-formulary-inp-container'>
								<label className='ChitChat-formulary-inp-container-label'>Do you have a boy or girl?</label>
								<div className='radio-group'>
									<input type='radio' id='girl' name='gender'></input>
									<label for='girl' name='gender'>Girl</label>
								</div>
								<div className='radio-group'>
									<input type='radio' id='boy' name='gender'></input>
									<label for='boy' name='gender'>boy</label>
								</div>
							</div>
							<div className='ChitChat-formulary-inp-container'>
								<label className='ChitChat-formulary-inp-container-label' for='childGender'>Which gender is your child?</label>
								<input className='ChitChat-formulary-inp-container-input' placeholder='Type your answer' id='childGender'></input>
							</div>
							<div className='ChitChat-formulary-inp-container'>
								<label className='ChitChat-formulary-inp-container-label'>How old is {this.state.name}?</label>
								<div className='radio-group'>
									<input type='radio' id='opt1' name='age'></input>
									<label for='opt1' name='age'>2-6</label>
								</div>
								<div className='radio-group'>
									<input type='radio' id='opt2' name='age'></input>
									<label for='opt2' name='age'>7-10</label>
								</div>
							</div>
							<div className='ChitChat-formulary-inp-container'>
								<label className='ChitChat-formulary-inp-container-label' for='childGrade'>Which grade is your child on?</label>
								<input className='ChitChat-formulary-inp-container-input' placeholder='Type your answer' id='childGrade'></input>
							</div>
							<div className='ChitChat-formulary-btn-container'>
								<button className='ChitChat-purple-btn ChitChat-formulary-btn-container-continue'><Link to='/dashboard/activities'>Continue</Link></button>
							</div>					
						</form>
					</section>
		</div>
		);
	}
}

export default FormComponent;