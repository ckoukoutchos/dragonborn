import React, { Component } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../backdrop/Backdrop';

interface ModalProps {
  children: any;
  color: string;
  onClose: () => void;
  show: boolean;
  title: string;
  wide?: boolean;
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
            style={{ opacity: show ? '1' : '0' }}
          >
            <div className={[classes.Header, classes[color]].join(' ')}>
              <h2 className={classes.Title}>{title}</h2>
            </div>

            <div className={classes.Body}>{children}</div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Modal;
