import React, { Component } from "react";
import '../scss/app.scss';
import close from '../assets/images/close.svg';
class Modal extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
  //return <button className="ChitChat-desc-buttons">{this.props.btnDesc}</button>;
  /*if (this.props.) {
    console.log('true');
  }*/
  const showHideClassName = this.props.show ? 'ChitChat-modal display-block' : 'ChitChat-modal display-none';
    return (
      <div className={showHideClassName} id={this.props.id}>
        <section className='ChitChat-modal-comp'>
          <div className='ChitChat-modal-comp-container'>
            <div className='ChitChat-modal-comp-close'>
              <button className='ChitChat-modal-comp-close-btn' onClick={this.props.handleClose}>
                <img src={close}></img>
              </button>  
            </div>
            <h2>{this.props.btnName}</h2>
            <p>{this.props.modalDesc}</p>
            <img className='ChitChat-modal-comp-container-img' src={this.props.imageSrc}></img>
          </div>
        </section>
      </div>
    );
  }
}

export default Modal;