import React, { Component } from "react";
import robotHead from '../../assets/images/robot-head.png';
import Modal from '../Modal/Modal';

class ModalScreen1 extends Component {
  constructor(props) {
		super(props);
  } 
  render() {
    var modal1 = {
			name:'camera',
			id:'camera',
			description: 'This will allow the Robot to observe your childs’ performance, movements and behaviour.',
			btnName: 'Camera'
		};
    return (
      <Modal id={modal1.id}
						 btnName={modal1.btnName}
						 modalDesc= {modal1.description}
						 handleClose={this.props.handleClose}
						 imageSrc={robotHead}/>
    );
  }
}

export default ModalScreen1;