import React from 'react';

import classes from './BlockInsetInput.module.css';

const blockInsetInput = props => {
  const { editing, label, value } = props;
  const modifier = (value - 10) / 2;

  return (
    <div
      className={[
        classes.Container,
        editing ? classes.Edit : classes.Disabled
      ].join(' ')}
    >
      <label
        className={[
          classes.Label,
          editing ? classes.Edit : classes.Disabled
        ].join(' ')}
      >
        {label}
      </label>
      <input
        className={[
          classes.Input,
          editing ? classes.Edit : classes.Disabled
        ].join(' ')}
        disabled={!editing}
        value={value}
      />
      <div className={classes.Inset}>+{modifier}</div>
    </div>
  );
};

export default blockInsetInput;
