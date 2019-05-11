import React from 'react';

import classes from './Input.module.css';

interface InputProps {
  editing?: boolean;
  label?: string;
  onChange?: any;
  long?: boolean;
  value: string;
}

const input = (props: InputProps) => {
  const { editing, label, long, onChange, value } = props;

  return (
    <div className={classes.Container}>
      <input
        className={[
          classes.Input,
          editing ? classes.Edit : classes.Disabled,
          long ? classes.Long : null
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
