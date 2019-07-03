import React from 'react';

import classes from './Input.module.css';

interface InputProps {
  editing?: boolean;
  label?: string;
  onChange?: any;
  long?: boolean;
  type?: string;
  value: string | number;
}

const input = (props: InputProps) => {
  const { editing, label, long, onChange, type, value } = props;

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
        type={type}
        value={value}
      />

      <label className={classes.Label}>{label}</label>
    </div>
  );
};

export default input;
