import React, { Component } from "react";
import robotHead from '../../assets/images/robot-head.png';
import Modal from '../Modal/Modal';

class ModalScreen2 extends Component {
  constructor(props) {
		super(props);
  } 
  render() {
    var modal = {
        name:'microphone',
        id:'microphone',
        description: 'Through Voice Recognition, our Robot can  complete an accurate evaluation of your child situation.', 
        btnName: 'Microphone'
    };
    return (
      <Modal id={modal.id} 
             btnName={modal.btnName}
			 modalDesc= {modal.description}
			 handleClose={this.props.handleClose}
			 imageSrc={robotHead}/>
    );
  }
}

export default ModalScreen2;