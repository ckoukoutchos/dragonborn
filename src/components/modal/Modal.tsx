import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../backdrop/Backdrop';

interface ModalProps {
  children: any;
  color: string;
  onClose: () => void;
  show: boolean;
  title: string;
}

class Modal extends Component<ModalProps> {
  // only re-render if show state has changed
  shouldComponentUpdate(nextProps: ModalProps) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    const { children, color, onClose, show, title } = this.props;

    return (
      <>
        <Backdrop show={show} clicked={onClose} />
        {show ? (
          <div
            className={classes.Modal}
            // @ts-ignore
            style={{
              transform: show ? 'translateY(0)' : 'translateY(-100vh)',
              opacity: this.props.show ? '1' : '0'
            }}
          >
            <div className={[classes.Header, classes[color]].join(' ')}>
              <h3 className={classes.Title}>{title}</h3>
            </div>

            <div className={classes.Body}>{children}</div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Modal;
