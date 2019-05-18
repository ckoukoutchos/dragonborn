import React from 'react';
import classes from './Button.module.css';

interface ButtonProps {
  btnType: string;
  children: any;
  color: string;
  disabled?: boolean;
  clicked?: (event: React.MouseEvent) => void;
}

const button = (props: ButtonProps) => {
  const { btnType, children, clicked, color, disabled } = props;

  return (
    <button
      className={[classes.Button, classes[btnType], classes[color]].join(' ')}
      disabled={disabled}
      onClick={clicked}
    >
      <strong>{children}</strong>
    </button>
  );
};

export default button;
