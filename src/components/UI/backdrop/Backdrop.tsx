import React from 'react';
import classes from './Backdrop.module.css';

interface BackdropProps {
  show: boolean;
  clicked: () => void;
}

const backdrop = (props: BackdropProps) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked} />
  ) : null;

export default backdrop;
