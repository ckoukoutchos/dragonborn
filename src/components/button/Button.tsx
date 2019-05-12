import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  btnType: string;
  children: any;
  color: string;
  disabled?: boolean;
  clicked?: (event: React.MouseEvent) => void;
}

const button = (props: ButtonProps) => (
  <button
    className={[
      classes.Button,
      classes[props.btnType],
      classes[props.color]
    ].join(' ')}
    disabled={props.disabled}
    onClick={props.clicked}
  >
    <strong>{props.children}</strong>
  </button>
);

export default button;
