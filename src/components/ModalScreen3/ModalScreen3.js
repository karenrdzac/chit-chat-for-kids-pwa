import React, { Component } from "react";
import robotBody from '../../assets/images/robot-body.png';
import Modal from '../Modal/Modal';

class ModalScreen3 extends Component {
  constructor(props) {
		super(props);
  } 
  render() {
    var modal = {
        name:'hands', 
        id:'hands',
        description: 'For certain therapies,  your child might need the physical support or guidance of the Robot.', 
        btnName: 'Hands'
    };
    return (
      <Modal id={modal.id} 
             btnName={modal.btnName}
			 modalDesc= {modal.description}
			 handleClose={this.props.handleClose}
			 imageSrc={robotBody}/>
    );
  }
}

export default ModalScreen3;