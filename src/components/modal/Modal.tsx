import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../backdrop/Backdrop';

class Modal extends Component<any, any> {
  shouldComponentUpdate(nextProps: any, nextState: any) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        {this.props.show ? <div className={classes.Modal}>Login</div> : null}
      </>
    );
  }
}

export default Modal;
