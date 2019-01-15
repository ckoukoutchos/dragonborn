import React from 'react';

import classes from './ToggleLineInput.module.css';

const toggleLineInput = props => {
  const { editing, label, onToggle, toggled, value } = props;
  return (
    <div className={classes.Container}>
      <div
        className={[
          classes.Toggle,
          toggled ? classes.Toggled : classes.Edit
        ].join(' ')}
        onClick={onToggle}
      />
      <input
        className={[
          classes.Input,
          editing ? classes.Edit : classes.Disabled
        ].join(' ')}
        disabled={!editing}
        value={value}
      />
      <label className={classes.Label}>{label}</label>
    </div>
  );
};

export default toggleLineInput;
