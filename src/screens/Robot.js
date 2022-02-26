import React, { Component } from "react";
import '../scss/app.scss';
import robot from '../assets/images/robot.png';
import arrowLeft from '../assets/images/arrow-left.png';
import ModalScreen1 from '../components/ModalScreen1/ModalScreen1';
import ModalScreen2 from '../components/ModalScreen2/ModalScreen2';
import ModalScreen3 from '../components/ModalScreen3/ModalScreen3';
import ModalScreen4 from '../components/ModalScreen4/ModalScreen4';
import { Link } from "react-router-dom";

class Robot extends Component {
  constructor(props){
		super(props);
		this.state = {
			modal1: false,
			modal2: false,
			modal3: false,
			modal4: false,
		};
	}
	
	hideComponent (name) {
		console.log('name', name);
		switch (name) {
			case 'modal1':
				this.setState({ modal1: !this.state.modal1 });
				break;
			case 'modal2':
				this.setState({ modal2: !this.state.modal2 });
				break;
			case 'modal3':
				this.setState({ modal3: !this.state.modal3 });
				break;
		case 'modal4':
				this.setState({ modal4: !this.state.modal4 });
				break;
		}
	}
  

  render() {
		const {modal1, modal2, modal3, modal4} = this.state;
    return (
        <div className='ChitChat body ChitChat-robot'>
			<button className='back-btn'>
					<img src={arrowLeft}></img>
					<Link to='/dashboard/my-progress'>Back</Link>
			</button>
            <div className='ChitChat-robot-header'>
                <h2 className='ChitChat-robot-header-title'>How would my robot work?</h2>
                <p className='ChitChat-robot-header-text'>The robot functionalities will give you a better insight of your child’s behaviour and evolution through the therapies.</p>
            </div>
						<div className='ChitChat-robot-container'>
                <div className='ChitChat-robot-container-btns'>
                    <button className='ChitChat-desc-buttons' onClick={() => this.hideComponent('modal1')}>Camera</button> 
                    <button className='ChitChat-desc-buttons' onClick={() => this.hideComponent('modal2')}>Microphone</button>
                </div>
                <div className='ChitChat-robot-container-body'>
                    <img className='ChitChat-robot-container-body-img' src={robot}></img>
                </div>
                <div className='ChitChat-robot-container-btns'>
                    <button className='ChitChat-desc-buttons' onClick={() => this.hideComponent('modal3')}>Hands</button> 
                    <button className='ChitChat-desc-buttons' onClick={() => this.hideComponent('modal4')}>Display</button>
                </div>
            </div>
						<div>
							{modal1 && <ModalScreen1 handleClose={() => this.hideComponent('modal1')}/>}
						</div>
						<div>
							{modal2 && <ModalScreen2 handleClose={() => this.hideComponent('modal2')}/>}
						</div>
						<div>
							{modal3 && <ModalScreen3 handleClose={() => this.hideComponent('modal3')}/>}
						</div>
						<div>
							{modal4 && <ModalScreen4 handleClose={() => this.hideComponent('modal4')}/>}
						</div>
        </div>
    );
  }
}

export default Robot;