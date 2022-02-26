import React, { Component } from "react";
import robotBody from '../../assets/images/robot-body.png';
import Modal from '../Modal/Modal';

class ModalScreen4 extends Component {
  constructor(props) {
		super(props);
  } 
  render() {
    var modal = {
        name:'display', 
        id:'display', 
        show:'false', 
        description: 'The tablet will display the therapy selected by the parent. Giving the kid a clear and understandable visual guidance.', 
        btnName: 'Display'
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

export default ModalScreen4;