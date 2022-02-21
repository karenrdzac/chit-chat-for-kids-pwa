import React, { Component } from "react";
import '../scss/app.scss';
import Modal from '../components/Modal';
import robotHead from '../assets/images/robot-head.png';
import robotBody from '../assets/images/robot-body.png';
import robot from '../assets/images/robot.png';

class Robot extends Component {
  state = {
    show: false,
    id: null,
  };
  showModal = (id) => {
      console.log('id', id);
    this.setState({
        show: true,
        id
    });
  }
  
  hideModal = (id) => {
    this.setState({
        show: false,
        id
    });
  }

  render() {
    let btnsInfo = {
        camera: {
            description: 'This will allow the Robot to observe your childs’ performance, movements and behaviour.',
            btnName: 'Camera'
        },
        microphone: {
            description: 'Through Voice Recognition, our Robot can  complete an accurate evaluation of your child situation.',
            btnName: 'Microphone'
        },
        hands: {
            description: 'For certain therapies,  your child might need the physical support or guidance of the Robot.',
            btnName: 'Hands'
        },
        display: {
            description: 'The tablet will display the therapy selected by the parent. Giving the kid a clear and understandable visual guidance.',
            btnName: 'Display'
        }
    };
    return (
        <div className='ChitChat ChitChat-robot'>
            <div className='ChitChat-robot-header'>
                <h2 className='ChitChat-robot-header-title'>How would my robot work?</h2>
                <p className='ChitChat-robot-header-text'>The robot functionalities will give you a better insight of your child’s behaviour and evolution through the therapies.</p>
            </div>
            <div className='ChitChat-robot-container'>
                <div className='ChitChat-robot-container-btns'>
                    <button className='ChitChat-desc-buttons' onClick={() => this.showModal('cameraModal')}>{btnsInfo.camera.btnName}</button> 
                    <button className='ChitChat-desc-buttons' onClick={this.showModal}>{btnsInfo.microphone.btnName}</button>
                </div>
                <div className='ChitChat-robot-container-body'>
                    <img className='ChitChat-robot-container-body-img' src={robot}></img>
                </div>
                <div className='ChitChat-robot-container-btns'>
                    <button className='ChitChat-desc-buttons' onClick={this.showModal}>{btnsInfo.hands.btnName}</button> 
                    <button className='ChitChat-desc-buttons' onClick={this.showModal}>{btnsInfo.display.btnName}</button>
                </div>
            </div>
            
            <Modal show={this.state.show} 
                   id={this.state.id}
                   btnName={btnsInfo.camera.btnName}
                   modalDesc= {btnsInfo.camera.description}
                   handleClose={this.hideModal}
                   imageSrc={robotHead}/>
            <Modal states={this.state}
                   id='microphoneModal' 
                   btnName={btnsInfo.microphone.btnName}
                   modalDesc= {btnsInfo.microphone.description}
                   handleClose={this.hideModal}
                   imageSrc={robotHead}/>
            <Modal states={this.state}
                   id='handsModal' 
                   btnName={btnsInfo.hands.btnName}
                   modalDesc= {btnsInfo.hands.description}
                   handleClose={this.hideModal}
                   imageSrc={robotBody}/>
            <Modal states={this.state}
                   id='displayModal' 
                   btnName={btnsInfo.display.btnName}
                   modalDesc= {btnsInfo.display.description}
                   handleClose={this.hideModal}
                   imageSrc={robotBody}/>
        </div>
    );
  }
}

export default Robot;