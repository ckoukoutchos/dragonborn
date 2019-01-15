import React from 'react';

import classes from './SmBlockInput.module.css';

const smBlockInput = props => {
  return (
    <div
      className={[
        classes.Container,
        props.edit ? classes.Edit : classes.Disabled
      ].join(' ')}
    >
      <input
        className={[
          classes.Input,
          props.edit ? classes.Edit : classes.Disabled
        ].join(' ')}
        disabled={!props.edit}
        value={props.value}
      />
      <label
        className={[
          classes.Label,
          props.edit ? classes.Edit : classes.Disabled
        ].join(' ')}
      >
        {props.label}
      </label>
    </div>
  );
};

export default smBlockInput;
