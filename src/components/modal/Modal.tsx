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
        <Backdrop show={this.props.show} clicked={this.props.onClose} />
        {this.props.show ? (
          <div
            className={classes.Card}
            // @ts-ignore
            style={{
              transform: this.props.show
                ? 'translateY(0)'
                : 'translateY(-100vh)',
              opacity: this.props.show ? '1' : '0'
            }}
          >
            <div
              className={[classes.Header, classes[this.props.color]].join(' ')}
            >
              <h3 className={classes.Title}>{this.props.title}</h3>
            </div>
            <div className={classes.Body}>{this.props.children}</div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Modal;
