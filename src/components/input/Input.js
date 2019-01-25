import React from 'react';

import classes from './Input.module.css';

const input = props => {
  const { editing, label, onChange, value } = props;
  return (
    <div className={classes.Container}>
      <input
        className={[
          classes.Input,
          editing ? classes.Edit : classes.Disabled
        ].join(' ')}
        disabled={!editing}
        onChange={onChange}
        value={value}
      />
      <label className={classes.Label}>{label}</label>
    </div>
  );
};

export default input;
