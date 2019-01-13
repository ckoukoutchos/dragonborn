import React from 'react';

import classes from './Button.module.css';

const button = props => (
  <button
    disabled={props.disabled}
    className={[
      classes.Button,
      classes[props.btnType],
      classes[props.color]
    ].join(' ')}
    onClick={props.clicked}
  >
    <strong>{props.children}</strong>
  </button>
);

export default button;
