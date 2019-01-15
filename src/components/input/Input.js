import React from 'react';

import classes from './Input.module.css';

const input = props => {
  return (
    <div className={classes.Container}>
      <input
        className={[
          classes.Input,
          props.editing ? classes.Edit : classes.Disabled
        ].join(' ')}
        disabled={!props.editing}
        value={props.value}
      />
      <label className={classes.Label}>{props.label}</label>
    </div>
  );
};

export default input;
